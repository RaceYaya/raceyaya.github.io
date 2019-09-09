$(document).ready(function(){
    var nameRegex;
    var buttonFilter1 = "*";
    var $container = $('.grid');
    $container.imagesLoaded( function(){
        $container.isotope({
            itemSelector: '.event-item',
            layoutMode: 'masonry',
            sortAscending: true,
            masonry: {
                columnWidth: '.event-item'
            },
            getSortData: {
                
                weight: function( itemElem ) {
                    var weight = $( itemElem ).find('.celebrity').text();
                    return parseFloat( weight.replace( /[\(\)]/g, '') );
                }
            },
            filter: function () {
                var $this = $(this);
                var searchResult1 = nameRegex ? $this.text().match(nameRegex) : true;
                return searchResult1;
            },
        });
    });
    $container.on( 'arrangeComplete', function( event, filteredItems ) {
        if(filteredItems.length == 0 ){
            $("#no-result").addClass("active");
        }
        else{
            $("#no-result").removeClass("active");
        }
    });
    var $quicksearch1 = $('#search-name1').keyup(debounce(function () {
        nameRegex = new RegExp($quicksearch1.val(), 'gi');
        $container.isotope();
    }));

    function debounce(fn, threshold) {
        var timeout;
        return function debounced() {
            if (timeout) {
                clearTimeout(timeout);
            }
            function delayed() {
                fn();
                timeout = null;
            }
            setTimeout(delayed, threshold || 100);
        };
    }
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\.fea\+\?\.\\\^\$\|]/g, "\\$&");
    }
    $container.show();
});
