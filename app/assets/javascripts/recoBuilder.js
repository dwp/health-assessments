if(document.getElementById('recoBuilderFrame')) {

    window.addEventListener('resize', manaegSidePanel);

    document.querySelectorAll('.reco-builder-page-link').forEach((element) => {
        element.addEventListener('click', changeSidePage);
    });

    document.querySelectorAll('.reco-toggle-icon').forEach((element) => {
        element.addEventListener('click', togglePane);
    });

    document.querySelectorAll('#splitScreenLink').forEach((element) => {
        element.addEventListener('click', toggleSplitScreen);
    });

    document.querySelectorAll('.split-screen-off').forEach((element) => {
        element.addEventListener('click', turnOffSplitScreen);
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

    // <input type="hidden" name="previousDocument" id="previousDocument" value="{{ data.openDocument }}">
    function toggleSplitScreen(e) {
        e.preventDefault();
        document.getElementById('splitScreenLink').setAttribute("aria-current", "page");
        document.getElementById('recoLeftPane').classList.remove('govuk-grid-column-two-thirds');
        document.getElementById('recoLeftPane').classList.add('govuk-grid-column-two-fifths');
        document.getElementById('recoRightPane').classList.remove('reco-hidden');
        e.target.dataset.isToggledOn = 'true';
        fetch('/autosave', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ field: 'splitScreen', value: e.target.dataset.isToggledOn }),
        })
          .catch((error) => console.error('Error:', error));
    }

    function turnOffSplitScreen(e) {
        e.preventDefault();
        document.getElementById('splitScreenLink').removeAttribute("aria-current");
        document.getElementById('recoLeftPane').classList.remove('govuk-grid-column-two-fifths');
        document.getElementById('recoLeftPane').classList.add('govuk-grid-column-two-thirds');
        document.getElementById('recoRightPane').classList.add('reco-hidden');
        document.getElementById('splitScreenLink').dataset.isToggledOn = 'false';
        fetch('/autosave', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ field: 'splitScreen', value: 'false' }),
        })
          .catch((error) => console.error('Error:', error));
          console.log(e.target);
          location.href = e.target.href;
    }

    if(document.getElementById('splitScreenLink')) {
        if(document.getElementById('splitScreenLink').dataset.isToggledOn === 'true' && document.getElementById('recoRightPane').classList.contains('reco-hidden')) {
            document.getElementById('recoLeftPane').classList.remove('govuk-grid-column-two-thirds');
            document.getElementById('recoLeftPane').classList.add('govuk-grid-column-two-fifths');
            document.getElementById('recoRightPane').classList.remove('reco-hidden');
            document.getElementById('splitScreenLink').setAttribute("aria-current", "page");
        } else if(document.getElementById('splitScreenLink').dataset.isToggledOn === 'false' && !document.getElementById('recoRightPane').classList.contains('reco-hidden')) {
            document.getElementById('recoLeftPane').classList.remove('govuk-grid-column-two-fifths');
            document.getElementById('recoLeftPane').classList.add('govuk-grid-column-two-thirds');
            document.getElementById('recoRightPane').classList.add('reco-hidden');
            document.getElementById('splitScreenLink').removeAttribute("aria-current");
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
        recordOpenDocument("");
    }

    function loadDocument(e) {
        e.preventDefault();
        populateSidePage(e.target.href, true);
        // console.log(e.target);
        recordOpenDocument(e.target.href);
    }

    function manaegSidePanel(e) {
        if(document.getElementById('recoRightIcon')) {
            if (document.body.clientWidth < 1000 && !document.getElementById('recoRightIcon').classList.contains('reco-hidden')) {
                document.getElementById('recoRightIcon').click();
            } else if (document.body.clientWidth >= 1000 && !document.getElementById('recoLeftIcon').classList.contains('reco-hidden')) {
                document.getElementById('recoLeftIcon').click();
            }
        }
    }

    function recordOpenDocument(href) {
        fetch('/autosave', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ field: "openDocument", value: href }),
          })
            .then((response) => response.json())
            .then((data) => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));
    }

    if(document.getElementById('previousDocument').value) {
        populateSidePage(document.getElementById('previousDocument').value, true)
    } else {
        populateSidePage();
    }

  }