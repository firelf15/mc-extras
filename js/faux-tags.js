/* For this task, the client wanted tag-like behavior for the displayed results from four multi-select fields. Alas, the plugin only allowed
for such behavior for two fields. More alas, the plugin didn't have any suitable hooks to override this limit. Hack the plugin?
May it never be! Enter JavaScript to wrap each term in a hyperlink that would lead to the Search Results as if the visitor had
searched for the term rather than merely clicking
on a link on the page.
*/

// Magic number of acmedir Search
if (acme_directory_vars.bodyClassString.indexOf("page-id-70") > -1) {
  // to put results above search form
  jQuery("#directory-search-page div.search-results").append(jQuery("#directory-search-page h2.title"));
  jQuery("#directory-search-page #directory-search-form-wrapper").appendTo(jQuery("#directory-search-page div.search-results"));

  // Faux Tags for Main Services and Industry Expertise
  var mainServicesFauxTag = jQuery('.acmedir-field-main_services .value');
  // FauxTags can't contain commas
  var mainServicesFauxTagArray = mainServicesFauxTag.text().split(',');
  var mainServicesFauxTagPlaceholder = document.createDocumentFragment();
  for (var fauxCount = 0; fauxCount < mainServicesFauxTagArray.length; fauxCount++) {
    mainServicesFauxTagArray[fauxCount] = mainServicesFauxTagArray[fauxCount].replace(/^\s+|\s+$/g, "");
    if (mainServicesFauxTagArray[fauxCount] != 'Other:') {
      var mainServicesFauxTagLink = document.createElement('a');
      mainServicesFauxTagLink.appendChild(document.createTextNode(mainServicesFauxTagArray[fauxCount]));
      mainServicesFauxTagLink.href = acme_directory_vars.baseURL + "?main-services=" + encodeURIComponent(mainServicesFauxTagArray[fauxCount]).toLowerCase() + "&post_type=wpdbp_listing";
      mainServicesFauxTagPlaceholder.appendChild(mainServicesFauxTagLink);
    } else {
      mainServicesFauxTagPlaceholder.appendChild(document.createTextNode(mainServicesFauxTagArray[fauxCount]));
    }
    if (fauxCount != mainServicesFauxTagArray.length - 1) {
      mainServicesFauxTagPlaceholder.appendChild(document.createTextNode(', '));
    }
  }
  mainServicesFauxTag.replaceWith(mainServicesFauxTagPlaceholder);

  // Same again for Industry Expertise
  var industryExpertiseFauxTag = jQuery('.acmedir-field-industry_expertise .value');
  var industryExpertiseFauxTagArray = industryExpertiseFauxTag.text().split(',');
  var industryExpertiseFauxTagPlaceholder = document.createDocumentFragment();
  for (var fauxCount = 0; fauxCount < industryExpertiseFauxTagArray.length; fauxCount++) {
    industryExpertiseFauxTagArray[fauxCount] = industryExpertiseFauxTagArray[fauxCount].replace(/^\s+|\s+$/g, "");
    if (industryExpertiseFauxTagArray[fauxCount] != 'Other:') {
      var industryExpertiseFauxTagLink = document.createElement('a');
      industryExpertiseFauxTagLink.appendChild(document.createTextNode(industryExpertiseFauxTagArray[fauxCount]));
      industryExpertiseFauxTagLink.href = acme_directory_vars.baseURL + "?ind-exp=" + encodeURIComponent(industryExpertiseFauxTagArray[fauxCount]).toLowerCase() + "&post_type=wpdbp_listing";
      industryExpertiseFauxTagPlaceholder.appendChild(industryExpertiseFauxTagLink);
    } else {
      industryExpertiseFauxTagPlaceholder.appendChild(document.createTextNode(industryExpertiseFauxTagArray[fauxCount]));
    }
    if (fauxCount != industryExpertiseFauxTagArray.length - 1) {
      industryExpertiseFauxTagPlaceholder.appendChild(document.createTextNode(', '));
    }
  }
  industryExpertiseFauxTag.replaceWith(industryExpertiseFauxTagPlaceholder);
}
