/**
 * Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License
 * http://aws.amazon.com/asl/
 */

/**
 * This file defines the prompts, reprompts, APL content for each supported locale
 */

// List of localized recipes (all locales)
const recipes = require("./recipes");

// List of localized strings (all locales)
module.exports = {
    en: {
        translation: {
            RECIPES: recipes.en,
            SKILL_NAME: `Arm Strength Exercises for Older People`,
            HEADER_TITLE: `Welcome to {{skillName}}`,
            RECIPE_HEADER_TITLE: `HOW TO DO {{sauce}} `,
            HELP_HEADER_TITLE: `HELP`,
            HELP_HEADER_SUBTITLE: `Select the exercise you want to do`, 
            WELCOME_MESSAGE: `Welcome to {{skillName}}.   This is a University of Bristol Arm Strength exercise skill, based on the “Exercises for older people: Strength” guide developed by NHS Choices.    For the exercises that require a chair,  chose one that is stable,  solid and without wheels.    You should be able to sit with feet flat on the floor and knees bent at right angles.       Here are four strength exercises available:         Chest Stretch,     Upper Body Twist,          Wall Press Up,     Bicep Curls,      You can ask a question like, How can I do {{sauce}} ? ...     Now,    which one would you like to do?`,
            WELCOME_REPROMPT: `For instructions on what you can say, please say help me.  Which exercise would you like to do?        chest stretch,      upper body twist,       wall press up,     or bicep curls?`,
            DISPLAY_CARD_TITLE: `{{skillName}}  - Instructions for {{sauce}}`,
            HELP_MESSAGE: `You can ask questions such as, what's the guide for {{sauce}}, or, you can say exit ... Now, which arm strength exercise would you like to do?   chest stretch?   upper body twist?    wall press up?    or bicep curls.  `,
            HELP_REPROMPT: `You can say things like, what's the instruction for {{sauce}}, or you can say exit ... Now, which arm strength exercise would you like to do?   chest stretch?   upper body twist?    Wall Press Up?    or bicep curls. `,
            STOP_MESSAGE: `Goodbye!`,
            RECIPE_REPEAT_MESSAGE: `Try saying repeat.`,
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: `I'm sorry, I currently do not know the instruction for {{sauce}}. Which strength exercise would you like to do ?      chest stretch?    upper body twist?         wall press up?    or bicep curls? `,
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: `I'm sorry, I currently do not know that instruction. Which strength exercise would you like to do?   chest stretch?    upper body twist?         wall press up?    or bicep curls? `,
            RECIPE_NOT_FOUND_REPROMPT: `Which strength exercise would you like to do?   chest stretch?    upper body twist?         wall press up?    or bicep curls? `,
            ERROR_MESSAGE: `I'm sorry I didn't catch that. Can you reformulate please ?`,
            HINT_TEMPLATE: ` [ {{sauce}} ] `,
            REFLECTOR_MESSAGE: `You just triggered {{intentName}}`
        }
    }
};