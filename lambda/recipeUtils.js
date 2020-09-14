// Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Amazon Software License
// http://aws.amazon.com/asl/

/**
 * This file defines utilities to manage recipes
 */

// Images for known recipes
const RECIPE_IMAGES = {

    HON: "https://assets.nhs.uk/prod/images/NHSC_0118_chest-stretch1.width-320.jpg",
    BBQ: "https://assets.nhs.uk/prod/images/NHSC_0118_upper-body-twist.width-320.jpg",
    /*TAR: "https://assets.nhs.uk/prod/images/NHSC_hip-marching1.width-320.jpg",
    PIZ: "https://assets.nhs.uk/prod/images/NHSC_0118_arm-raises.width-1534.jpg",
    CRA: "https://assets.nhs.uk/prod/images/NHSC_0418_neck-stretch1.width-1534.jpg",*/
    THO: "https://assets.nhs.uk/prod/images/NHSC_0518_wall_press-up.width-320.jpg",
    PES: "https://assets.nhs.uk/prod/images/NHSC_0518_Bicep_curls.width-320.jpg"
 
};
// Image for unknown recipes
const RECIPE_DEFAULT_IMAGE = "https://assets.nhs.uk/prod/images/NHSC_0518_Leg-extension.width-320.jpg";

module.exports = {

    /**
     * Returns an object containing the recipe (sauce) ID & spoken value by the User from the JSON request
     * Values are computing from slot "Item" or from Alexa.Presentation.APL.UserEvent arguments
     */
    getSauceItem(request){
        let sauceItem = {};
        // Touch Event Request ?
        if (request.type === 'Alexa.Presentation.APL.UserEvent') {
            sauceItem.id = request.arguments[1];
        } else {
            // Voice Intent Request
            const itemSlot = request.intent.slots["Item"];
            // Capture spoken value by the User
            if (itemSlot && itemSlot.value) {
                sauceItem.spoken = itemSlot.value;
            }
            // Find associated Sauce Id from Entity Resolution (if a match has been made)
            if (itemSlot &&
                itemSlot.resolutions &&
                itemSlot.resolutions.resolutionsPerAuthority[0] &&
                itemSlot.resolutions.resolutionsPerAuthority[0].status &&
                itemSlot.resolutions.resolutionsPerAuthority[0].status.code === 'ER_SUCCESS_MATCH') {
                sauceItem.id = itemSlot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
            }
        }
        return sauceItem;
    },

    /**
     * Returns a random localized recipe from the list of available recipes
     */
    getRandomRecipe(handlerInput){
        const recipes = handlerInput.t('RECIPES');
        const keys = Object.keys(recipes);
        const randomIndex = Math.floor(Math.random() * keys.length);
        return recipes[keys[randomIndex]];
    },

    /**
     * Returns the Image URL associated to a recipe ID
     * When no dedicated Image is found, fallback to a default image 
     */
    getSauceImage(id){
        const url = RECIPE_IMAGES[id];
        if (url){
            return url;
        }
        return RECIPE_DEFAULT_IMAGE;
    }
}