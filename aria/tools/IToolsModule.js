/*
 * Aria Templates 1.7.15 - 11 Dec 2015
 *
 * Copyright 2009-2015 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Aria = require("../Aria");
var ariaTemplatesIModuleCtrl = require("../templates/IModuleCtrl");


/**
 * Interface for the tools module
 */
module.exports = Aria.interfaceDefinition({
    $classpath : "aria.tools.IToolsModule",
    $extends : ariaTemplatesIModuleCtrl,
    $interface : {
        /**
         * Sub modules, one for each tool available. Each will load a sub module and appropriate display.
         * @type Array
         */
        subModulesList : []
    },
    $events : {
        bridgeReady : {
            description : "Raised when the bridge to the main window is available"
        },
        modulesReady : {
            description : "Raised when the debug submodules are ready"
        }
    }

});