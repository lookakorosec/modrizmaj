/*paginator start*/
var PaginatedArticle = new Class({

  initialize: function (newElement) {
    this.element = {};
    this.elementHeight = 0;
    this.element = newElement;
    this.elementHeight = this.element.getStyle('height').toInt();
    this.element.setStyle('position', 'absolute'); 
  },

  setPosition: function(newTop, newLeft) {
    if (newTop) {this.element.setStyle('top', newTop);}
    if (newLeft) {this.element.setStyle('left', newLeft);}
  },

  getHeight: function() {
    return this.elementHeight;
  }

});

var Paginator = new Class({

  initialize: function(paginatorElementID, paginationScroller, paginatedElementsSelector) {/*class="span_h1" -> html5 title in article!!*/
    this.element = {};
    this.scrollContainer = {};
    this.paginatorHeight  = 0 ;
    this.paginatorWidth = 0 ;
    this.paginatorEntries = [] ;
    this.numberOfPages = 0 ;
    this.numberOfPagesCounted = 0 ;
    this.scrollme = 0;
    this.scrollMeToo = 0; 
    this.myScroller = 0;
    
    this.pB2 = {};
    this.linkToPagesBoxID= 0;
    
    this.paginatedElementsSelector=[];
    this.element = paginatorElementID;
    this.paginatorID_global = this.element.get('id');
    this.paginatedBox = paginatorElementID;
  
    var x12q = this.paginatedBox.getParent("section").get('id');
    this.paginatedBoxParent = x12q.replace('Content',"");
    var getNodeNames = this.element.children[2].nodeName;/*html5 structure! -> [0] == <h1.hidden>, [1] == <header>, [2] == _target_ */
    this.paginatedElementsSelector = this.element.getElements(getNodeNames);
    this.counterColArticles = 1;
    this.elementsID = this.element.get('id');
    this.uniquePaginatedID = this.elementsID.replace(this.paginatedBoxParent + '_xFlag',""); 
    var pB5 = this.element.getElement(paginatorElementID);
    this.myScroller = new Element('div', {id: this.elementsID + '_scroller'});
    this.myScroller.inject(pB5);


   this.paginatedElementsSelector.each( (function(selectedElement) {
                    var articleUniqueTitle = selectedElement.getElements('span.span_h1').get('html');/*ta class more met za HTML5 naslov!! -> */
                    var wrapedElement = new Element('article', {
                                  id: this.elementsID + '_article' + this.counterColArticles,
                                   styles: {
                                          position: 'absolute'
                                      },
                                  });
                    var h2nameTag = new Element('h2', {
                                  id: this.elementsID + '_h2nameTag' + this.counterColArticles,
                                  html: this.paginatedBoxParent+this.uniquePaginatedID 
                                  + ' articleNum '+ this.counterColArticles +': '+ articleUniqueTitle,
                                  styles: {display: 'none'}
                                });
                    var pB7 = wrapedElement.wraps(selectedElement);pB7.addClass('entry');
                    var pB7a = h2nameTag.inject(pB7, 'top');
                    this.myScroller.grab(pB7);
                     this.paginatorEntries.include(new PaginatedArticle(pB7));
                     this.counterColArticles++;
                  }).bind(this));

    this.scrollContainer = this.myScroller;

    this.scrollContainer.setStyle('position', 'relative');
    this.scrollContainer.setStyle('right', '0px');
    this.paginatorHeight = this.element.getStyle('height').toInt();
    this.paginatorWidth = this.element.getStyle('width').toInt(); 
    this.positionHorizontalPages();

  },
 
  positionHorizontalPages: function() {

    var pB8 = 0; /*new top od diva*/
    var pB9 =Object.getLength(this.paginatorEntries);
    var pC2 = 0;

    this.pC1 = new Element('span', {'id': this.paginatorID_global + '_LinksToArticle' });
    this.myScroller.grab(this.pC1, 'top');

    for(pC2; pC2 < pB9; pC2++) {
          if (pC2 > 0) {
                  var pC3 = this.paginatorEntries[pC2].getHeight();
                  var pC3a = pC3; 
                  var pH1 = this.paginatorHeight;
                    if ((pB8 + pC3a) < (pH1 - 10)) {
                          this.paginatorEntries[pC2].setPosition(pB8, this.paginatorWidth * this.numberOfPages);
                      } else if((pB8 + pC3a) > (pH1 - 10)){
                          //tlele delam nove strani 1
                          this.numberOfPages++;
                          this.addPageLink();
                          var pB8 = 0;
                          this.paginatorEntries[pC2].setPosition(pB8, this.paginatorWidth * this.numberOfPages);
                  }/*end_if_2*/
                  pB8 += pC3;
          } else {
                var pB8 = this.paginatorEntries[pC2].getHeight();
                this.addPageLink();
          }/*end_if_1*/
      }/*end_for*/
    this.insertNextPrevPage();
    this.numberOfPagesCounted = this.numberOfPages;
  },
  /*slider*/
  goToPage: function(event) {
      /*remove classes*/
      this.pC1.getElements('a').removeClass('active');
      /*add single class*/
      var pC4 = event.target;
      pC4.addClass("active");
      var luka = 'a_' + this.sectionID;
      this.numberOfPages = event.target.id.split(luka)[1];
       if(this.numberOfPages != this.scrollMeToo) {

                this.scrollContainer.setStyle('opacity', '0');
                 /*set for next and prev. pageMorph*/
                this.scrollMeToo = this.numberOfPages;
                    this.scrollme = this.numberOfPages * this.paginatorWidth;
                    /*moving the pA1*/
                    this.scrollContainer.setStyle('right', this.scrollme);
                    /*animation fadeIn*/
                (function() { new Fx.Morph(this.scrollContainer, { duration: 500, transition: Fx.Transitions.Circ.easeOut }).start({ 
                  opacity: 0.99
                  });}.bind(this)).delay(100);
      }
  },

  addPageLink: function() {
             var page = this.pC1;
             this.sectionID = page.get('id');
             this.paginatorID_global = this.element.get('id');
           var pC6 = new Element('a', { id: 'a_' + this.sectionID + this.numberOfPages});
           //add class to link
           pC6.addClass('cssTargetForActivePages');
           
             if(page){
              if (this.numberOfPages == 0) {
                pC6.appendText(this.numberOfPages + 1 + " "); 
                pC6.inject(this.pC1);
                pC6.addEvent('click', this.goToPage.bind(this));
                pC6.addClass("active");
              } else {
                pC6.appendText(this.numberOfPages + 1 + " ");
                pC6.inject(this.pC1);
                pC6.addEvent('click', this.goToPage.bind(this));
              }
          }/*end_if*/
    },/*end_addPageLink*/
  
   
  insertNextPrevPage: function() {
    if (this.numberOfPages > 0) {
      
      var pC8 = this.element.get('id');
      var pC9 = $(this.myScroller);
      var pD1 = new Element('div', {'id': pC8 + '_pagiantionControllBox', 'class': 'paginationPagesList'});
      var pD2 = pD1;
      pD1.inject(pC9, 'before'); 
      this.linksTarget = pD1;
      var pD3 = new Element('span', {'id': pC8 + '_PreviousPage', 'class': 'PaginationPrevButton',html: '&#60;'});
      var pD4 = new Element('span', {'id': pC8 + '_NextPage', 'class': 'PaginationNextButton', html: '&#62;'});
      pD3.addEvent('click', this.previousPage.bind(this));
      pD4.addEvent('click', this.nextPage.bind(this));
      pD3.inject(this.linksTarget, 'top');
      this.pC1.inject(this.linksTarget);
      pD4.inject(this.linksTarget, 'bottom'); 
      this.linkToPagesBoxID= pD3; 
    
    }else if (this.numberOfPages == 0 ){
      var pC8 = this.element.get('id');
      var pC9 = $(this.myScroller);
      var pD1 = new Element('div', {'id': pC8 + '_pagiantionControllBox', 'class': 'paginationPagesList'});
      var pD2 = pD1;
      pD1.inject(pC9, 'before'); 
      this.linksTarget = pD1;
        this.pC1.inject(this.linksTarget);
    }
  },
  nextPage: function() {
    if (this.scrollMeToo < this.numberOfPagesCounted ) {
      this.scrollMeToo++;
      this.scrollContainer.setStyle('opacity', '0');
      var pD5 = this.scrollMeToo * this.paginatorWidth; 
      this.scrollContainer.setStyle('right', pD5);
          /*animation fadeIn*/
      (function(){ new Fx.Morph(this.scrollContainer, { duration: 500, transition: Fx.Transitions.Circ.easeOut }).start({ 
        opacity: 0.99
      });}.bind(this)).delay(100);
/*add active class*/
    /*remove classes*/
      this.pC1.getElements('a').removeClass('active');
    /*add single class*/
    var trg_link_toActivate_id = this.pC1.get("id");
    var xy_next = "a_" + trg_link_toActivate_id + this.scrollMeToo;
    $(xy_next).addClass("active");
    }
  },

  previousPage: function() {
    if (this.scrollMeToo == 0){}else if (this.scrollMeToo > 0){
          this.scrollMeToo--;
          this.scrollContainer.setStyle('opacity', '0');
          var pD6 = this.scrollMeToo * this.paginatorWidth; 
          this.scrollContainer.setStyle('right', pD6);
          (function(){ new Fx.Morph(this.scrollContainer, { duration: 500, transition: Fx.Transitions.Circ.easeOut }).start({ 
            opacity: 0.99  
            });}.bind(this)).delay(100);
/*add active class*/
      /*remove classes*/
      this.pC1.getElements('a').removeClass('active');
    /*add single class*/
    var trg1_link_toActivate_id = this.pC1.get("id");
    var xy_pre = "a_" + trg1_link_toActivate_id + this.scrollMeToo;
    $(xy_pre).addClass("active");
    }
  }

});