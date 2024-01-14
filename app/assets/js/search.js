function search(name) {
    try {
        $.ajax({
            type: "POST",
            url: "http://localhost/wiki1-2d/public/index.php?action=search",
            data: {
                search:name
            },
            dataType: 'JSON',
            success: function (response) {
                console.log(response);
                $('#features').empty();
                response.forEach(function (wiki) {
                    var article = $('<article>');
                    article.append('<span class="icon fa-gem"></span>');
                    var contentDiv = $('<div class="content">');
                    contentDiv.append('<h3><a href="index.php?action=wiki&id=' + wiki.wiki_id + '">' + wiki.title + '</a></h3>');
                    contentDiv.append('<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum Sed nulla amet lorem feugiat tempus aliquam</p>');
                    article.append(contentDiv);
                    $('#features').append(article);
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error: " + textStatus, errorThrown);
            }
        });
    } catch (e) {
        console.log(e);
    }
}
