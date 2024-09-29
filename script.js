// Declare hashtagLists in a scope accessible to multiple functions
const hashtagLists = {
    nature: ['#natureperfection', '#naturecolours', '#motherearthart', '#naturephotography',
    '#naturephotographer', '#natureza', '#outdoors', '#the_folknature', '#folkscenery',
    '#visualsofearth', '#natgeoyourshot', '#natureperception', '#psychedelicnature',
    '#naturecolours', '#natureart', '#natgeo'],
    forest: ['#woodland_and_water', '#tree_magic', '#tree_brilliance'],
    surf: ['#oceanphotography', '#surflife', '#waves', '#barrel', '#surf', '#ocean', '#sea',
    '#beach', '#surfmore', '#surfing', '#surfphotography', '#surfinglife', '#surfphotos',
    '#instasurf', '#perfectwave', '#carvemaglineup', '#carvemag', '#surfphoto', '#stoked',
    '#oceanlife', '#surfer', '#surfgirl', '#seakong', '#unhingedsurfboards', '#surfhousing',
    '#oceano', '#logsurfing', '#sendit', '#bigwaves', '#explorepage', '#surfline', '#morning',
    '#morninglight', '#TheSurfiety', '#oceanlover', '#surftrip', '#roadtrip', '#surflover',
    '#surfmates', '#soulsurfer', '#surfboard', '#surfmate', '#waveporn', '#surferphotos',
    '#surfpics', '#surflifestyle', '#surfcommunity', '#peelingwave', '#surfdaily', '#surfartist',
    '#surfedit', '#surfart', '#wavephoto', '#wavepicture', '#secretsurfspot', '#surfphotos',
    '#surfingphotos', '#surfingphoto', '#wavephotography', '#surfingculture', '#surferculture',
    '#surfedits', '#surfdestination', '#surfingdestination', '#surfingworld', '#surflocation',
    '#surfingmagazine', '#surfmagazine', '#surfy', '#sunsetsurf', '#surfsunset', '#surfingatsunset',
    '#beachphotography', '#surftrip', '#surfstyle', '#vitaminsea', '#sunsetbeach', '#surfers',
    '#surfparadise', '#surfpics', '#learntosurf', '#sunsetshots', '#sunsetskies',
    '#sunsetsessions', '#sunsetsgram', '#surfingtime', '#instasurfing', '#sunsetsession',
    '#bluenature', '#crystalclearwater'],
    sun: ['#goldenhourphotography', '#goldenhour', '#skylovers', '#sunrise', '#sunset', '#sunsets',
    '#skypainters', '#sundowns', '#sunsetphotography', '#sunkissed', '#missingsummer',
    '#sunsetlover', '#sol', '#soleilcouchant', '#sunsetsky', '#sunset_vision', '#sunsetcolors'],
    astro: ['#astrophotography', '#astronomy', '#eclipse', '#nightsky', '#internationalspacestation', '#space', '#milkyway', '#telescope', '#nasa'],
    moon: ['#moon', '#bloodmoon', '#supermoon', '#moonphoto', '#moonphotography', '#moonphases',
    '#moonphasewatch', '#moonlovers', '#moonlover', '#moonlove', '#themoon', '#lunareclipse',
    '#redmoon', '#fullmoon'],
    travel: ['#ifyouleave', '#roam247', '#magicalmoments', '#traveldeeper', '#travel', '#paradise',
    '#travelgood', '#wearetravelers', '#intravelist', '#travelin', '#everytraveler', '#travelpix',
    '#travelnm', '#ilovetraveling', '#soultravel', '#travelgo', '#travelphotographer',
    '#travelgoals', '#beautifuldestinations', '#travelersnotebook', '#voyaged',
    '#travellingthroughtheworld', '#stayandwander'],
    aunsw: ['#byronphotographer', '#byronsurf', '#newsouthwhales'],
    auqld: ['#sunshinecoastphotographer', '#visitqueensland', '#queensland', '#noosa', '#noosaphotographer', '#noosasurf', '#noosasurfphotographer', '#noosaphotography', '#noosaheads', '#noosa',
    '#noosabeach', '#surfinnoosa'],
    portrait: [ '#peopleinframe', '#portrait', '#portraitsvisuals', '#worldofportraits',
    '#portraitsfromtheworld', '#pursuitofportraits', '#globeportraits', '#portraits_mf'],
    street: ['#streetphotography', '#streetclassics', '#sublimestreet', '#street_storytelling',
    '#storyofthestreet', '#life_is_street', '#streetlife_award', '#streetmagazines',
    '#street_ninjas', '#streetleaks', '#street_vision', '#filmic_streets', '#streetshared',
    '#citykillerz', '#streetmobs', '#streetfinder', '#streetspremier', '#streetgallerymagazine',
    '#streetgrammers', '#streetphotographers', '#streetphotographer', '#bcncollective',
    '#street_photo_club', '#streets_vision', '#timeless_streets', '#streetsnap',
    '#streetmagazine', '#tnscollective', '#spgcaptures', '#streetmoment', '#thestreephers',
    '#dreaminstreets', '#rsa_streetview_', '#magicofstreets', '#wearethestreets',
    '#rsastreetview', '#deceptive_cities', '#streetizm', '#streetsatnight', '#eyephotomagazine',
    '#streets_up_north', '#lensculturestreets', '#subshooterz', '#weshootstreet', '#street_minute',
    '#inthestreets', '#streetianity', '#streetvibes', '#streethunters', '#streets_storytelling',
    '#street_avengers', '#street_encounters', '#myspc', '#snapthestreetbeat', '#streetouss',
    '#sweet_street_beat', '#bnw_of_our_world', '#streetview', '#peraphotogallery',
    '#minimal_streetphoto', '#yourshotphotographer', '#streetphotographerscommunity',
    '#urbanandstreet', '#insidephotos', '#bnccollective', '#bnw_demand', '#nonstopstreet',
    '#thephotosector', '#everybodystreet', '#friendsinstreets', '#streetdreamsmag',
    '#eyeshotmag', '#spi_minimalism', '#spi_silhouettes', '#streetleaks', '#streetdreamsmag',
    '#streetfinder', '#streetsgrammer', '#allstreetshots', '#shinyhappystreet',
    '#shadows_magazine', '#supersweetstreet', '#progressivestreet', '#streetgrammers10k',
    '#moments_in_streetlife', '#streets_cinema', '#streetsfired', '#cinema_streets',
    '#urbanromantix', '#capitalshooters', '#streetphotographyinternational', '#eu_shooters',
    '#sdmfeatures', '#urbanwanderer'],
    fujifilm: [ '#viewfinder', '#rangefinder', '#rangefindercamera', '#fujifilmnordic', '#fujifilmfrance', '#fujifilmuk', '#fujiphotographer', '#fujixseries', '#fujifilm', '#fujixt2', '#xt2'],
    tone: ['#cinematicshine', '#photocinematica', '#photocinematic', '#cinestill', '#filminspired',
    '#cinegrams', '#cinematic_labels', '#toneception', '#oldtonecollective', '#cineandcolor',
    '#cinebible'],
    mag: ['#spicollective', '#realismagazine', '#n8zine', '#somewheremagazine', '#momaphotoclub',
    '#woofermagazine', '#worldviewmag', '#northwindmag', '#thepictoriallist', '#broadmag',
    '#rentalmag', '#tdmmag', '#myfeatureshoot', '#imaginarymagnitude', '#indiependentmag',
    '#portbox', '#verybusymag', '#archivecollectivemag', '#paperjournal', '#mytinyatlas',
    '#photozine', '#ourmag', '#createcommune', '#shooters', '#negativemag', '#washmagphoto',
    '#grainedephotographe', '#collectivesoulmag', '#innerelm'],
    minimal: ['#gominimalmag', '#minimalistshot', '#minimalzine', '#unlimitedminimal'],
    ig: ['#timetobehave', '#thinkverylittle', '#depthobsessed', '#knowthismind', '#visualgrams',
    '#bigworld_shotz', '#ourvisualvibes', '#chasingleitz', '#darkroom_daydream', '#photooftheday',
    '#photosession', '#igdaily', '#igers', '#ig_today', '#igersfrance'],
    video: ['#clipoftheday', '#videooftheday', '#reels'],
    architecture: ['#palacelife', '#architecture', '#design', '#interiordesign', '#architecturephotography',
    '#architecturelovers', '#homedecor', '#archilovers', '#building', '#qrauitectura', '#homedesign',
    '#decoration', '#history', '#architettura', '#inspiration', '#architektur', '#archimasters',
    '#ic_architecture', '#icu_architecture', '#archi_features', '#arch_impressive', '#arc_only',
    '#architecture_hunter', '#architecture_now', '#archiobjects', '#objectsmag', '#archiromantix',
    '#thinkingarchitecture', '#archdaily', '#architizer'],
};

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Hashtags copied to clipboard!');
}

function generateHashtags() {
    const selectedThemes = getSelectedThemes();
    const numHashtags = document.getElementById("numHashtags").value;

    // Check if the selected number is larger than the total available options
    const totalAvailableOptions = selectedThemes.reduce(
        (total, theme) => total + hashtagLists[theme].length,
        0
    );

    if (parseInt(numHashtags) > totalAvailableOptions) {
        alert("Error: requested number exceeds available options.");
        return;
    }

    // Fetch hashtags based on the selected themes with a total count of numHashtags
    const hashtags = getHashtags(selectedThemes, numHashtags);

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>${hashtags.join(' ')}</p>`;

    // Enable the copy to clipboard button and set its click event
    const copyButton = document.getElementById("copyButton");
    copyButton.disabled = false;
    copyButton.onclick = () => copyToClipboard(hashtags.join(' '));
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
