$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/cucumber/features/is_it_friday_yet.feature");
formatter.feature({
  "name": "Is it Friday yet",
  "description": "  In order to increase my productivity\n  As a user\n  I want to know if it is Friday yet",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@friday"
    }
  ]
});
formatter.scenarioOutline({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is \u003cday\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day"
      ]
    },
    {
      "cells": [
        "Monday"
      ]
    },
    {
      "cells": [
        "Mardi"
      ]
    },
    {
      "cells": [
        "Mercredi"
      ]
    },
    {
      "cells": [
        "Jeudi"
      ]
    },
    {
      "cells": [
        "Samedi"
      ]
    },
    {
      "cells": [
        "Dimanche"
      ]
    }
  ]
});
formatter.scenario({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is Monday",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is Mardi",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is Mercredi",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is Jeudi",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is Samedi",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "It is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@slow"
    },
    {
      "name": "@removed"
    }
  ]
});
formatter.step({
  "name": "today is Dimanche",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a NO",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "It is Friday",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@friday"
    },
    {
      "name": "@fast"
    }
  ]
});
formatter.step({
  "name": "today is Friday",
  "keyword": "Given "
});
formatter.match({
  "location": "IsItFridayYetSteps.todayIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask if it is Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "IsItFridayYetSteps.IAskIfItIsFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a YES",
  "keyword": "Then "
});
formatter.match({
  "location": "IsItFridayYetSteps.IGetA(String)"
});
formatter.result({
  "status": "passed"
});
});