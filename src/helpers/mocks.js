class Product {
    constructor(id, title, subtitle, description, stock, amount, image) {
        this.id = id
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.stock = stock;
        this.amount = amount;
        this.image = image;
    }
}

const productsConv = JSON.parse('[{"id":1,"title":"Cream Of Tartar","subtitle":"lobortis est phasellus","description":"sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam","stock":6,"amount":9236,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":2,"title":"Cleaner - Comet","subtitle":"lorem ipsum dolor","description":"ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat","stock":0,"amount":5637,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":3,"title":"Corn Shoots","subtitle":"lorem vitae mattis","description":"nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue","stock":2,"amount":3310,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":4,"title":"Sole - Iqf","subtitle":"pede","description":"et ultrices posuere cubilia curae","stock":15,"amount":9071,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":8},' +
    '{"id":5,"title":"Cookie Dough - Oatmeal Rasin","subtitle":"consequat morbi a","description":"mauris sit amet eros suspendisse accumsan tortor quis turpis sed","stock":5,"amount":3849,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":6,"title":"Lettuce - Radicchio","subtitle":"viverra eget","description":"sapien in sapien iaculis congue vivamus metus","stock":11,"amount":1921,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":7,"title":"Shrimp - Baby, Cold Water","subtitle":"accumsan tortor","description":"vel ipsum praesent blandit lacinia","stock":2,"amount":3907,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":8,"title":"Dish Towel","subtitle":"quam","description":"dapibus augue vel accumsan tellus nisi eu orci mauris","stock":7,"amount":1188,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":9,"title":"Soup - Knorr, Ministrone","subtitle":"augue quam sollicitudin","description":"sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi","stock":19,"amount":6468,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":10,"title":"Squash - Butternut","subtitle":"lobortis","description":"donec semper sapien a libero nam dui proin leo odio porttitor","stock":14,"amount":7551,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":11,"title":"Beef - Striploin Aa","subtitle":"est lacinia nisi","description":"amet eleifend pede libero quis orci nullam","stock":3,"amount":4830,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":12,"title":"Wine - Delicato Merlot","subtitle":"quam","description":"quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt","stock":2,"amount":409,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":13,"title":"Lobster - Live","subtitle":"sed lacus morbi","description":"luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui","stock":1,"amount":9345,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":14,"title":"Turnip - Wax","subtitle":"condimentum id","description":"accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices","stock":11,"amount":934,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":15,"title":"Pepper - Scotch Bonnet","subtitle":"pretium iaculis","description":"ac lobortis vel dapibus at diam nam tristique","stock":5,"amount":6518,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":16,"title":"Galliano","subtitle":"vitae consectetuer eget","description":"in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae","stock":14,"amount":6318,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":1},' +
    '{"id":17,"title":"Bagels Poppyseed","subtitle":"suspendisse","description":"tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque","stock":15,"amount":8466,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":18,"title":"Beef Dry Aged Tenderloin Aaa","subtitle":"massa","description":"ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus","stock":19,"amount":4831,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":19,"title":"Table Cloth 81x81 Colour","subtitle":"mauris","description":"id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia","stock":16,"amount":8473,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":20,"title":"Bread - Roll, Canadian Dinner","subtitle":"donec","description":"vel nisl duis ac nibh fusce lacus purus aliquet","stock":13,"amount":1002,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":5},' +
    '{"id":21,"title":"Ezy Change Mophandle","subtitle":"felis","description":"enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa","stock":1,"amount":4252,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":22,"title":"Veal - Insides Provini","subtitle":"in blandit","description":"cursus id turpis integer aliquet massa id lobortis","stock":17,"amount":5869,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":3},' +
    '{"id":23,"title":"Pastry - Lemon Danish - Mini","subtitle":"urna ut tellus","description":"non mattis pulvinar nulla pede ullamcorper augue a","stock":9,"amount":5300,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":24,"title":"Cranberry Foccacia","subtitle":"ultrices","description":"semper sapien a libero nam dui proin leo odio porttitor","stock":9,"amount":7415,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":25,"title":"Versatainer Nc - 888","subtitle":"lobortis","description":"sapien ut nunc vestibulum ante ipsum primis in faucibus orci","stock":17,"amount":1704,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":26,"title":"Chestnuts - Whole,canned","subtitle":"etiam vel","description":"id pretium iaculis diam erat fermentum justo nec","stock":20,"amount":5715,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":27,"title":"Pate Pans Yellow","subtitle":"id ornare imperdiet","description":"eget nunc donec quis orci eget","stock":1,"amount":5456,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":28,"title":"Flour - Chickpea","subtitle":"pede libero","description":"pede venenatis non sodales sed tincidunt eu felis fusce posuere felis","stock":13,"amount":803,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":29,"title":"Onions - Vidalia","subtitle":"convallis","description":"nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla","stock":12,"amount":2460,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":30,"title":"Wine - Duboeuf Beaujolais","subtitle":"ligula vehicula consequat","description":"nisl ut volutpat sapien arcu sed augue aliquam","stock":1,"amount":4738,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":31,"title":"Cake - French Pear Tart","subtitle":"id lobortis convallis","description":"venenatis turpis enim blandit mi in porttitor pede","stock":15,"amount":5232,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":2},' +
    '{"id":32,"title":"Vodka - Moskovskaya","subtitle":"lectus","description":"ante ipsum primis in faucibus orci luctus et ultrices posuere","stock":12,"amount":8199,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":33,"title":"Eggplant Italian","subtitle":"eleifend quam a","description":"diam erat fermentum justo nec condimentum neque","stock":8,"amount":5659,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":34,"title":"Cookie Chocolate Chip With","subtitle":"ultrices posuere","description":"ante ipsum primis in faucibus","stock":7,"amount":944,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":35,"title":"Spice - Pepper Portions","subtitle":"at","description":"vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus","stock":4,"amount":1986,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":36,"title":"Shrimp - 16/20, Iqf, Shell On","subtitle":"urna","description":"enim blandit mi in porttitor pede justo eu massa donec dapibus duis at","stock":2,"amount":6508,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":37,"title":"Rosemary - Fresh","subtitle":"justo aliquam quis","description":"hac habitasse platea dictumst morbi vestibulum velit","stock":9,"amount":1450,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":38,"title":"Sugar - Crumb","subtitle":"eu","description":"duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis","stock":3,"amount":5042,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":39,"title":"Juice - Cranberry, 341 Ml","subtitle":"cum","description":"risus praesent lectus vestibulum quam sapien","stock":13,"amount":1686,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":40,"title":"Pepper - Julienne, Frozen","subtitle":"tellus nisi eu","description":"turpis elementum ligula vehicula consequat morbi a","stock":19,"amount":488,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":41,"title":"Steel Wool","subtitle":"eu tincidunt","description":"porttitor pede justo eu massa donec dapibus","stock":1,"amount":9117,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":42,"title":"Ginger - Pickled","subtitle":"venenatis","description":"feugiat non pretium quis lectus","stock":8,"amount":4024,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":43,"title":"Wine - White, Antinore Orvieto","subtitle":"primis","description":"nunc commodo placerat praesent blandit nam nulla integer pede","stock":15,"amount":528,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":44,"title":"Cake Slab","subtitle":"curabitur convallis duis","description":"massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in","stock":5,"amount":7814,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":3},' +
    '{"id":45,"title":"Halibut - Whole, Fresh","subtitle":"sed","description":"lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula","stock":15,"amount":4341,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":46,"title":"Meldea Green Tea Liquor","subtitle":"nulla eget eros","description":"sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus","stock":20,"amount":5896,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":47,"title":"Pecan Raisin - Tarts","subtitle":"dui vel nisl","description":"porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi","stock":11,"amount":1433,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":48,"title":"Turnip - Mini","subtitle":"tincidunt","description":"quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi","stock":10,"amount":9112,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":49,"title":"Juice - Apple, 500 Ml","subtitle":"iaculis diam","description":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet","stock":14,"amount":8593,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":2},' +
    '{"id":50,"title":"Tea Leaves - Oolong","subtitle":"vel nisl","description":"morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis","stock":12,"amount":1737,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":51,"title":"Brandy Cherry - Mcguinness","subtitle":"odio odio elementum","description":"sagittis dui vel nisl duis ac nibh fusce lacus purus","stock":10,"amount":6982,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":5},' +
    '{"id":52,"title":"Gloves - Goldtouch Disposable","subtitle":"quisque","description":"varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam","stock":20,"amount":7679,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":3},' +
    '{"id":53,"title":"Soup - Tomato Mush. Florentine","subtitle":"ornare consequat lectus","description":"eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus","stock":6,"amount":6881,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":54,"title":"Squid Ink","subtitle":"habitasse platea","description":"luctus rutrum nulla tellus in sagittis dui vel nisl","stock":4,"amount":7717,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":55,"title":"Wine - Gewurztraminer Pierre","subtitle":"duis consequat","description":"quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse","stock":14,"amount":7826,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":56,"title":"Milk - 1%","subtitle":"et ultrices posuere","description":"venenatis lacinia aenean sit amet justo morbi ut odio","stock":16,"amount":334,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":8},' +
    '{"id":57,"title":"Gherkin","subtitle":"nulla mollis molestie","description":"ante ipsum primis in faucibus orci luctus et ultrices","stock":9,"amount":6233,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":58,"title":"Beef - Tenderloin","subtitle":"pede","description":"vulputate luctus cum sociis natoque penatibus et magnis","stock":20,"amount":8360,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":59,"title":"Rice - Basmati","subtitle":"convallis tortor","description":"sed tristique in tempus sit amet sem fusce consequat","stock":10,"amount":2232,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":60,"title":"Bread - Petit Baguette","subtitle":"volutpat dui","description":"a ipsum integer a nibh in quis justo","stock":19,"amount":4756,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":61,"title":"Avocado","subtitle":"pharetra","description":"sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris","stock":7,"amount":2827,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":62,"title":"Breakfast Quesadillas","subtitle":"cras mi pede","description":"volutpat in congue etiam justo etiam pretium iaculis","stock":14,"amount":9358,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":8},' +
    '{"id":63,"title":"Parsley - Fresh","subtitle":"luctus cum","description":"ultrices phasellus id sapien in sapien iaculis congue","stock":10,"amount":2226,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":6},' +
    '{"id":64,"title":"Food Colouring - Orange","subtitle":"risus praesent","description":"risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante","stock":7,"amount":5752,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":65,"title":"Shortbread - Cookie Crumbs","subtitle":"mollis molestie lorem","description":"donec odio justo sollicitudin ut suscipit","stock":18,"amount":3544,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":66,"title":"Mushroom - Porcini, Dry","subtitle":"nam dui proin","description":"ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam","stock":17,"amount":4926,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":67,"title":"Tortillas - Flour, 8","subtitle":"pede","description":"justo morbi ut odio cras mi pede malesuada in","stock":11,"amount":2072,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":68,"title":"Strawberries","subtitle":"massa","description":"suspendisse potenti in eleifend quam","stock":9,"amount":9159,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":3},' +
    '{"id":69,"title":"Octopus","subtitle":"massa tempor","description":"consequat varius integer ac leo","stock":19,"amount":7279,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":8},' +
    '{"id":70,"title":"Chinese Foods - Pepper Beef","subtitle":"sapien","description":"vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci","stock":17,"amount":4319,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":71,"title":"Bread - Pumpernickel","subtitle":"justo","description":"quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis","stock":4,"amount":3276,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":72,"title":"Apron","subtitle":"mi pede malesuada","description":"convallis tortor risus dapibus augue vel accumsan tellus nisi eu","stock":15,"amount":773,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":2},' +
    '{"id":73,"title":"Clementine","subtitle":"nisl ut","description":"vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin","stock":20,"amount":5780,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":74,"title":"Cup - 4oz Translucent","subtitle":"pellentesque","description":"blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer","stock":10,"amount":5542,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":2},' +
    '{"id":75,"title":"Beer - True North Strong Ale","subtitle":"erat id","description":"pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar","stock":4,"amount":2974,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":1},' +
    '{"id":76,"title":"Clams - Canned","subtitle":"enim","description":"potenti cras in purus eu magna","stock":4,"amount":8085,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":3},' +
    '{"id":77,"title":"Lettuce - Arugula","subtitle":"parturient","description":"vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac","stock":17,"amount":6477,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":8},' +
    '{"id":78,"title":"Wine - Cave Springs Dry Riesling","subtitle":"ligula vehicula consequat","description":"eget massa tempor convallis nulla neque libero convallis","stock":15,"amount":316,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":79,"title":"Hot Choc Vending","subtitle":"amet","description":"pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero","stock":14,"amount":8178,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":6},' +
    '{"id":80,"title":"Rice - Jasmine Sented","subtitle":"dapibus augue","description":"nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum","stock":9,"amount":1965,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":2},' +
    '{"id":81,"title":"Nectarines","subtitle":"integer","description":"eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar","stock":5,"amount":2760,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":82,"title":"Flour - So Mix Cake White","subtitle":"sed vestibulum sit","description":"magna ac consequat metus sapien ut","stock":7,"amount":8610,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":83,"title":"Wine - Periguita Fonseca","subtitle":"vestibulum ac","description":"purus sit amet nulla quisque arcu","stock":17,"amount":7738,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":84,"title":"Apples - Spartan","subtitle":"convallis morbi","description":"praesent blandit lacinia erat vestibulum","stock":19,"amount":2929,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3},' +
    '{"id":85,"title":"Coconut - Shredded, Unsweet","subtitle":"magnis","description":"suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque","stock":4,"amount":6380,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":86,"title":"Gatorade - Orange","subtitle":"ullamcorper","description":"in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra","stock":7,"amount":3095,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":1},' +
    '{"id":87,"title":"Veal - Insides, Grains","subtitle":"turpis donec posuere","description":"convallis morbi odio odio elementum eu interdum eu","stock":7,"amount":2760,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":4},' +
    '{"id":88,"title":"Chocolate - Liqueur Cups With Foil","subtitle":"diam neque","description":"ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque","stock":16,"amount":604,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":4},' +
    '{"id":89,"title":"Roe - White Fish","subtitle":"nisl","description":"arcu adipiscing molestie hendrerit at","stock":8,"amount":4660,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":8},' +
    '{"id":90,"title":"Steampan - Foil","subtitle":"eu","description":"dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et","stock":11,"amount":4375,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":7},' +
    '{"id":91,"title":"Cattail Hearts","subtitle":"tincidunt","description":"ut odio cras mi pede malesuada in","stock":4,"amount":909,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":8},' +
    '{"id":92,"title":"Lambcasing","subtitle":"pharetra","description":"sed interdum venenatis turpis enim","stock":7,"amount":6063,"image":"http://dummyimage.com/318x180.png/5fa2dd/ffffff","category_id":3},' +
    '{"id":93,"title":"Lettuce - California Mix","subtitle":"ipsum","description":"donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo","stock":4,"amount":2304,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":94,"title":"Mushroom - Morels, Dry","subtitle":"augue","description":"orci luctus et ultrices posuere cubilia curae nulla dapibus","stock":18,"amount":1862,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":7},' +
    '{"id":95,"title":"Pork - Chop, Frenched","subtitle":"sapien","description":"vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id","stock":14,"amount":7311,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":96,"title":"Arctic Char - Fresh, Whole","subtitle":"ut","description":"vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros","stock":18,"amount":9219,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":5},' +
    '{"id":97,"title":"Pop - Club Soda Can","subtitle":"massa","description":"ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat","stock":19,"amount":7233,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":1},' +
    '{"id":98,"title":"Muffin Hinge 117n","subtitle":"ante ipsum","description":"ac consequat metus sapien ut nunc vestibulum ante ipsum","stock":16,"amount":443,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":2},' +
    '{"id":99,"title":"Beer - Tetleys","subtitle":"faucibus","description":"vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat","stock":8,"amount":5062,"image":"http://dummyimage.com/318x180.png/dddddd/000000","category_id":3}]')

const addUndefinedProductsToProductsArray = () => {
    let productsList = [];
    productsConv.forEach((productL) => {
        let productCreated = Object.assign(new Product(), productL)
        productsList.push(productCreated);
    })
    return productsList;
}

export const obtainProductsV2 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve(productsConv)
    }, 3000)
});

export const filterItem = (id) => new Promise((resolve) => {
    let list = addUndefinedProductsToProductsArray();
    let product = list.filter(element => element.id == id)
    setTimeout(() => {
        resolve(product)
    }, 1000)
})

export const filterByCategory = (categoryID) => {
    let list = addUndefinedProductsToProductsArray();
    let filteredProducts = list.filter(product => product.category_id == categoryID);
    return filteredProducts
}