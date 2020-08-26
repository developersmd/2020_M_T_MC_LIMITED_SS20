"use strict";
(function () {
  if (!window.translations) {
    window.translations = {};
  }
  var mstranslations = {
    default: {
      TITLE: "Main Title"

    },
    ES: {
      TITLE: "Tituo principal"
    },
  };
  _.merge(window.translations, mstranslations);
})();
