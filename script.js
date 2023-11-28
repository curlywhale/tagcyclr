// Declare hashtagLists in a scope accessible to multiple functions
const hashtagLists = {
    nature: ['#natureperfection', '#naturecolours', '#motherearthart', '#naturephotography', '#naturephotographer', '#natureza', '#outdoors'],
    forest: ['#woodland_and_water', '#tree_magic', '#tree_brilliance'],
    sea: ['#oceanphotography', '#surflife'],
    sun: ['#skylovers', '#sunrise', '#sunset', '#sunsets', '#skypainters', '#sundowns', '#sunsetphotography', '#sunkissed', '#missingsummer'],
    astro: ['#astrophotography', '#astronomy', '#eclipse', '#nightsky', '#internationalspacestation', '#space', '#milkyway', '#telescope', '#nasa'],
    moon: ['#moon', '#bloodmoon', '#supermoon', '#moonphoto', '#moonphotography', '#moonphases', '#moonphasewatch', '#moonlovers', '#moonlover', '#moonlove', '#themoon', '#lunareclipse', '#redmoon', '#fullmoon'],
    travel: ['#traveldeeper', '#travel', '#paradise', '#travelgood', '#wearetravelers', '#intravelist', '#travelin', '#everytraveler', '#travelpix', '#travelnm', '#ilovetraveling', '#soultravel', '#travelgo', '#travelphotographer', '#travelgoals', '#beautifuldestinations', '#travelersnotebook', '#voyaged', '#travellingthroughtheworld', '#stayandwander'],
    australia: ['#byronphotographer', '#byronsurf', '#newsouthwhales', '#sunshinecoastphotographer', '#visitqueensland'],
    portrait: ['#portrait', '#portraitsvisuals', '#worldofportraits', '#portraitsfromtheworld', '#pursuitofportraits', '#globeportraits', '#portraits_mf'],
    fujifilm: ['#fujiphotographer', '#fujixseries', '#fujifilm'],
    tone: ['#oldtonecollective', '#cineandcolor'],
    mag: ['#myfeatureshoot', '#imaginarymagnitude', '#indiependentmag', '#portbox', '#verybusymag', '#archivecollectivemag', '#paperjournal', '#mytinyatlas', '#photozine', '#ourmag'],
    minimal: ['#gominimalmag', '#minimalistshot', '#minimalzine', '#unlimitedminimal'],
    ig: ['#photooftheday', '#photosession', '#igdaily', '#igers', '#ig_today'],
};

function generateHashtags() {
    const selectedThemes = getSelectedThemes();
    const numHashtags = document.getElementById("numHashtags").value;

    // Check if the selected number is larger than the total available options
    const totalAvailableOptions = selectedThemes.reduce(
        (total, theme) => total + hashtagLists[theme].length,
        0
    );

    if (parseInt(numHashtags) > totalAvailableOptions) {
        alert("Error: Requested number exceeds available options.");
        return;
    }

    // Fetch hashtags based on the selected themes with a total count of numHashtags
    const hashtags = getHashtags(selectedThemes, numHashtags);

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Generated Hashtags: ${hashtags.join(', ')}</p>`;
}

function getSelectedThemes() {
    const checkboxes = document.getElementsByName("theme");
    return Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
}

function getHashtags(themes, numHashtags) {
    let selectedHashtags = [];

    while (selectedHashtags.length < numHashtags) {
        themes.forEach(theme => {
            // Randomly select hashtags from the specified theme without repetition
            const themeHashtags = randomSample(hashtagLists[theme], 1, selectedHashtags);
            selectedHashtags = selectedHashtags.concat(themeHashtags);
        });
    }

    return selectedHashtags.slice(0, numHashtags);
}

function randomSample(array, size, exclude = []) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    const sampled = shuffled.filter(item => !exclude.includes(item));

    if (sampled.length >= size) {
        return sampled.slice(0, size);
    } else {
        // If there are not enough unique items, return all available items
        return sampled;
    }
}