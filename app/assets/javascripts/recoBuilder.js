if(document.getElementById('recoBuilderFrame')) {

    window.addEventListener('resize', manaegSidePanel);

    document.querySelectorAll('.reco-builder-page-link').forEach((element) => {
        element.addEventListener('click', changeSidePage);
    });

    document.querySelectorAll('.reco-toggle-icon').forEach((element) => {
        element.addEventListener('click', togglePane);
    });

    function addDocumentEventListeners() {
        document.querySelectorAll('.reco-document').forEach((element) => {
            element.addEventListener('click', loadDocument);
        });
    }

    function populateSidePage(url, isDocument) {
        url = url || document.getElementById('recoBuilderFrame').dataset.url;
        fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            if(isDocument) {
                const iframe = doc.getElementsByTagName('iframe')[0];
                const newIframe = document.createElement("iframe");
                newIframe.style.display = "none";
                newIframe.src = iframe.src;
                document.getElementById('recoBuilderFrame').textContent = '';
                const backLink = document.createElement('a');
                const linkText = document.createTextNode("Back");
                backLink.appendChild(linkText);
                backLink.title = "title";
                backLink.href = document.location.href;
                backLink.classList.add('govuk-back-link');
                backLink.addEventListener('click', returnToDocuments);
                document.getElementById('recoBuilderFrame').appendChild(backLink);
                document.getElementById('recoBuilderFrame').appendChild(newIframe);
                newIframe.style.display = "block";
                newIframe.style.width = '100%';
                newIframe.style.height = '900px';
            } else {
                const mainSection = doc.querySelector('.govuk-grid-column-full').innerHTML;
                document.getElementById('recoBuilderFrame').innerHTML = mainSection;
            }

            addDocumentEventListeners();
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    }

    function changeSidePage(e) {
        e.preventDefault();
        populateSidePage(e.target.href);
        if(document.getElementById('recoRightPane').classList.contains('reco-hidden')) {
            togglePane({target: {id: 'recoLeftIcon'}})
        }
    }

    function togglePane(e) {
        const isLeftArrow = e.target.id === 'recoLeftIcon';
        document.getElementById('recoLeftIcon').classList.toggle('reco-hidden');
        document.getElementById('recoRightIcon').classList.toggle('reco-hidden');

        if(!isLeftArrow) {
            // govuk-grid-column-one-third
            document.getElementById('recoLeftPane').classList.remove('govuk-grid-column-two-fifths');
            document.getElementById('recoLeftPane').classList.add('govuk-grid-column-two-thirds');
            document.getElementById('recoRightPane').classList.add('reco-hidden');
        } else {
            document.getElementById('recoLeftPane').classList.remove('govuk-grid-column-two-thirds');
            document.getElementById('recoLeftPane').classList.add('govuk-grid-column-two-fifths');
            document.getElementById('recoRightPane').classList.remove('reco-hidden');
        }
    }

    function returnToDocuments(e) {
        e.preventDefault();
        populateSidePage();
    }

    function loadDocument(e) {
        e.preventDefault();
        populateSidePage(e.target.href, true);
        console.log(e.target);

    }

    function manaegSidePanel(e) {
        if (document.body.clientWidth < 1000 && !document.getElementById('recoRightIcon').classList.contains('reco-hidden')) {
            document.getElementById('recoRightIcon').click();
        } else if (document.body.clientWidth >= 1000 && !document.getElementById('recoLeftIcon').classList.contains('reco-hidden')) {
            document.getElementById('recoLeftIcon').click();
        }
    }

    populateSidePage();

  }