define(['papaparse', 'jquery', 'underscore', 'bootstrap', 'd3', './generators/generateAll'],
function(Papa, $, _){
    var init = require('./app/generators/generateAll');
    /* Article models are loaded in -> window.models */
    init({
        data: {'world': 'hello'},
        logics: function(){
            console.log("overloaded?");
            // console.log('window.models '+ window.models);
            // logics goes here
            // console.log(window.models);
            // console.log(window.category);
            var colors = d3.scale.category10();
            var count = 0;
            for (var key in window.category) {
                var color = colors(count);
                var content = key;
                var divBlock = " <div " + "id='"
                                + key+"_id'"
                                +" style='background-color:"
                                + color + "'>"
                                + content
                                + "</div>";
                // console.log(divBlock);
                $('#main-left-main').append(divBlock);
                // console.log(key, window.category[key]);

                // draw sub divs
                var subColors = d3.scale.category20();
                var subCount = 0;
                // append to the category but hide
                for (var v in window.category[key]){
                    var subColor = subColors(subCount);
                    var subContent = window.category[key][v];
                    var divBlock = " <div " + "id='"
                    + subContent+"_id'"
                    +" style='background-color:"
                    + subColor
                    + ';display: none;'
                    + "'>"
                    + subContent
                    + "</div>";
                    $('#'+key+'_id').append(divBlock);
                    subCount += 1;
                }
                count += 1;
            }

            // $( "ul.level-2" ).children().css( "background-color", "red" );

            $('#main-left-main').children().each(function(){
                var $this = $(this);

                // for each category
                // $this.on('mouseenter', function(){
                $this.on('click', function(){
                    console.log('clicked' + $this.attr('id'));
                    $this.siblings().css( "display", "none");

                    $this.children().each(function(){
                        var inner = $(this);
                        inner.show();
                    });
                });

                $this.on('mouseleave', function(){
                    console.log('clicked' + $this.attr('id'));
                    $this.siblings().css( "display", "block");

                    $this.children().each(function(){
                        var inner = $(this);
                        inner.hide();
                    });
                });
            });

            debugger;
            // hook up category buttons
            $('#category li').click('on', function(){
                $('#category-value').text($(this).text())
            });

            $('#subCategory li').click('on', function(){
                $('#subCategory-value').text($(this).text())
            });

            $('#query').click('on', function(){
                window.query = {}
                window.query['category']= $('#category-value').text();
                $('#category-value').html('Category <span class="caret"></span>');
                window.query['subCategory']= $('#subCategory-value').text();
                $('#subCategory-value').html('SubCategory <span class="caret"></span>');
                console.log(window.query);
            });
        }
    }).papa();
});

