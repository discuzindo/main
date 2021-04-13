function UxCBInitPhotoSwipeFromDOM(t){for(var e=function t(e,a){return e&&(a(e)?e:t(e.parentNode,a))},a=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var a=t.target||t.srcElement,i=e(a,(function(t){if(t.tagName)return t.hasAttribute("data-lightbox")&&"true"===t.getAttribute("data-lightbox")}));if(i){for(var n,r=jQuery(i).parents(".lightbox-photoswipe"),l=r.find('[data-lightbox="true"]'),s=l.length,d=0,c=0;c<s;c++)if(1===l[c].nodeType){if(l[c]===i){n=d;break}d++}return n>=0&&o(n,r[0]),!1}if("A"==t.target.nodeName){if("_blank"!=t.target.target)return window.location.href=t.target.href;window.open(t.target.href,"_blank")}},o=function(t,e,a,o){var i,n,r,l=document.querySelectorAll(".pswp")[0],s=[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}];if(r=function(t){for(var e,a,o,i,n=jQuery(t).find('[data-lightbox="true"]'),r=n.length,l=[],s=0;s<r;s++)1===(e=n[s]).nodeType&&(o=(a=jQuery(e).find(".lightbox-item")).attr("data-size").split("x"),i="video"==a.attr("data-type")?{html:a.find("> div").html()}:{src:a.attr("href"),w:parseInt(o[0],10),h:parseInt(o[1],10)},e.children.length>0&&(i.title=a.attr("data-title")?a.attr("data-title"):a.attr("title")),a.find("img").length>0&&(i.msrc=a.find("img").attr("src")),i.el=e,l.push(i));return l}(e),"undefined"!=typeof photoSwipeLocalize&&(s=photoSwipeLocalize),n={index:t,galleryUID:e.getAttribute("data-pswp-uid"),showHideOpacity:!0,getThumbBoundsFn:function(t){var e=r[t].el.getElementsByTagName("img")[0],a=window.pageYOffset||document.documentElement.scrollTop,o=e.getBoundingClientRect();return{x:o.left,y:o.top+a,w:o.width}},addCaptionHTMLFn:function(t,e,a){return t.title?(e.children[0].innerHTML=t.title,!0):(e.children[0].innerText="",!1)},getImageURLForShare:function(e){return r[t].src||""},shareButtons:s,getPageURLForShare:function(e){return r[t].src||""},getTextForShare:function(e){return r[t].title||""},parseShareButtonOut:function(t,e){return e}},o)if(n.galleryPIDs){for(var d=0;d<r.length;d++)if(r[d].pid==t){n.index=d;break}}else n.index=parseInt(t,10)-1;else n.index=parseInt(t,10);if(isNaN(n.index))return;for(var c=document.getElementsByName("gallery-style"),u=0,f=c.length;u<f;u++)if(c[u].checked){"radio-all-controls"==c[u].id||"radio-minimal-black"==c[u].id&&(n.mainClass="pswp--minimal--dark",n.barsSize={top:0,bottom:0},n.captionEl=!1,n.fullscreenEl=!1,n.shareEl=!1,n.bgOpacity=.85,n.tapToClose=!0,n.tapToToggleControls=!1);break}a&&(n.showAnimationDuration=0);(i=new PhotoSwipe(l,PhotoSwipeUI_Default,r,n,!0)).init(),i.listen("beforeChange",(function(){var t=jQuery(i.currItem.container);jQuery(".videoWrapper iframe").removeClass("active");t.find(".videoWrapper iframe").addClass("active");jQuery(".videoWrapper iframe").each((function(){jQuery(this).hasClass("active")||jQuery(this).attr("src",jQuery(this).attr("src"))}))})),i.listen("close",(function(){isFilterClick=!0,jQuery(".videoWrapper iframe").each((function(){jQuery(this).attr("src",jQuery(this).attr("src"))}))}))},i=document.querySelectorAll(t),n=0,r=i.length;n<r;n++)i[n].setAttribute("data-pswp-uid",n+1),i[n].onclick=a;var l=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var a=t.split("&"),o=0;o<a.length;o++)if(a[o]){var i=a[o].split("=");i.length<2||(e[i[0]]=i[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e.hasOwnProperty("pid")?(e.pid=parseInt(e.pid,10),e):e}();l.pid>0&&l.gid>0&&o(l.pid-1,i[l.gid-1],!0,!0)}UxCBModModuleIsotope=[],function(t){"use strict";var e=[];e.win=t(window),e.doc=t(document),e.body=t("body"),e.itemQueue=[],e.itemDelay=150,e.queueTimer,e.isMobile=function(){return!!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||e.win.width()<769)},e.fnParseQuery=function(t){for(var e=/([^=&\s]+)[=\s]*([^=&\s]*)/g,a={};e.exec(t);)a[RegExp.$1]=RegExp.$2;return a},e.fnModuleAnimationTextFill=function(t){console.log(t);gsap.timeline({scrollTrigger:{trigger:t,start:()=>"top 80%",end:()=>"bottom top",scrub:!0,toggleActions:"play none reverse none",invalidateOnRefresh:!0}}).to(t,{"--progress":"1"})},e.fnModuleAnimationScroll=function(t){let e=t.parents(".module")[0],a=t.attr("data-animation"),o="80%";e.getAttribute("data-animationstart")&&(o=e.getAttribute("data-animationstart"));let i="top "+o,n=.7;e.getAttribute("data-animationduration")&&(n=Number(e.getAttribute("data-animationduration")));let r="on";e.getAttribute("data-animationagain")&&(r=String(e.getAttribute("data-animationagain")));let l="none";e.getAttribute("data-animationease")&&(l=e.getAttribute("data-animationease"));let s=.2;e.getAttribute("data-animationstagger")&&(s=Number(e.getAttribute("data-animationstagger")));let d=t,c=d.find(".text-split");if(c.length){gsap.registerPlugin(SplitText);let t=new SplitText(c,{type:"lines",reduceWhiteSpace:!1,linesClass:"spline"});new SplitText(c,{type:"lines",reduceWhiteSpace:!1,linesClass:"spline-parent"});d=t.lines,gsap.set(c,{opacity:1}),window.addEventListener("resize",(()=>{t.revert()}))}ScrollTrigger.batch(d,{trigger:d,start:i,end:"bottom top",interval:.2,onEnter:t=>t.forEach(((t,e)=>{!function(t,e){gsap.timeline({delay:t*s}).to(e,{opacity:1,x:0,y:0,rotation:0,rotationY:0,rotationX:0,scale:1,duration:n,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:l,stagger:s})}(e,t)})),onLeaveBack:t=>t.forEach(((t,e)=>{"on"===r&&function(t,e){c.length||(a=e.getAttribute("data-animation"));let n={opacity:0,overwrite:!0};switch(a){case"from-top":n.y=-100,i="top+=100px "+o;break;case"from-bottom":n.y=100,i="top-=100px "+o;break;case"from-left":n.x=-120;break;case"from-right":n.x=120;break;case"from-zoomin":n.scale=1.3;break;case"from-zoomout":n.scale=.7;break;case"from-zoom-mask":n.clipPath="polygon(10% 5%,90% 5%,90% 95%,10% 95%)";break;case"from-zoom-mask2":n.clipPath="polygon(0% 20%,100% 20%,100% 80%,0% 80%)";break;case"from-left-mask":n.clipPath="polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",n.opacity=".5",n.x=-120;break;case"from-right-mask":n.clipPath="polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",n.opacity=".5",n.x=120;break;case"from-top-mask":n.clipPath="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",n.opacity=".5";break;case"from-bottom-mask":n.clipPath="polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",n.opacity=".5";break;case"rotate-downleft":n.rotate="-90deg";break;case"rotate-downright":n.rotate="90deg";break;case"flip-y":n.rotationY="45deg";break;case"flip-x":n.rotationX="45deg";break;case"from-top-long":n.y=-1e3,i="top+=1000px "+o;break;case"from-bottom-long":n.y=1e3,i="top-=1000px "+o;break;case"from-left-long":n.x=-1e3;break;case"from-right-long":n.x=1e3;break;case"from-top-short":n.y=-40,i="top+=40px "+o;break;case"from-bottom-short":n.y=40,i="top-=40px "+o;break;case"from-left-short":n.x=-40;break;case"from-right-short":n.x=40;break;default:n.opacity=0}gsap.timeline({delay:t*s}).to(e,n)}(e,t)}))})},e.goToSection=function(t,e){gsap.to(window,{scrollTo:{y:t,autoKill:!1},duration:1}),e&&e.restart()},e.fnModuleParentRowGsap=function(){const t=document.querySelector(".entry").querySelector(".bm-builder"),a=t.querySelectorAll(".bm-row"),o=document.querySelector(".univer-color"),i=t.querySelector('[data-change-color="on"]');a.length&&(gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(a).forEach((t=>{const a=t.getAttribute("data-change-color"),n=t.getAttribute("data-backcolor")?t.getAttribute("data-backcolor"):"transparent",r=t.getAttribute("data-frontcolor"),l=t.getAttribute("data-logocolor"),s=t.getAttribute("data-goto-top");function d(){gsap.to(o,{background:n,duration:2}),e.body.get(0).style.setProperty("--fontcolor-univer",r),"on"==a?(e.body.hasClass("bm-enable-univer")||e.body.addClass("bm-enable-univer"),"null"==r||""==r||e.body.hasClass("bm-enable-univer-textcolor")||e.body.addClass("bm-enable-univer-textcolor")):(e.body.removeClass("bm-enable-univer"),e.body.removeClass("bm-enable-univer-textcolor")),"default-logo-univer"==l?(e.body.removeClass("alt-logo-univer"),e.body.addClass("default-logo-univer")):"alt-logo-univer"==l?(e.body.removeClass("default-logo-univer"),e.body.addClass("alt-logo-univer")):(e.body.removeClass("default-logo-univer"),e.body.removeClass("alt-logo-univer"))}"on"==t.getAttribute("data-horizontal")&&setTimeout((()=>{const e=t.querySelector(".bm-wrap-horizontal");e&&gsap.to(e,{x:()=>-(e.scrollWidth-document.documentElement.clientWidth)+"px",ease:"none",scrollTrigger:{trigger:e,invalidateOnRefresh:!0,pin:!0,scrub:.2,start:"top top",end:()=>"+="+(e.scrollWidth-document.documentElement.clientWidth)}});const a=t.querySelector(".bm-wrap-horizontal-bg");if(a){gsap.timeline({scrollTrigger:{trigger:t.querySelector(".bm-wrap"),invalidateOnRefresh:!0,pin:!0,scrub:1,start:"top top",end:()=>`+=${a.scrollWidth}`}}).to(t.querySelector(".text-inside"),{opacity:0},0).to(a,{x:0},0)}}),10),"on"==s&&ScrollTrigger.create({trigger:t,onEnter:()=>e.goToSection(t),onEnterBack:()=>e.goToSection(t)}),null!==i&&setTimeout((function(){ScrollTrigger.create({trigger:t,start:"top 50%",end:"bottom 50%",onEnter:()=>d(),onEnterBack:()=>d()})}),10)})))},e.fnModuleFilters=function(a){let o=a.find(".filters [data-filter]"),i=a.find(".container-masonry"),n=i.find(".masonry-list"),r=n.data("unique");o.length&&o.each((function(){t(this).on("click",(function(){let o=t(this).attr("data-filter"),l=t(this).attr("data-postid"),s=(Number(t(this).find(".filter-num").text()),0),d=0,c=[];i.hasClass("container-masonry")&&(s=i.find("section").length,d=Number(i.attr("data-number"))),n.hasClass("infiniti-scroll")&&n.addClass("infiniti-scrolling");var u=UxCBModModuleIsotope[r];if(u)if(u.isotope({filter:o}),a.find(".filters").find("li").removeClass("active"),t(this).parent().addClass("active"),s<d&&"*"!=o){var f=d-c.length;t.post(ajaxurl,{action:"ux_cb_module_grid_container",catID:0,postID:l,post__not_in:c,postNumber:f,moduleUnique:r}).done((function(a){var o=t(a);u.isotope("insert",o),n.hasClass("masonry-grid")&&(e.fnIsotopeListResize(i),u.isotope("layout")),n.hasClass("infiniti-scroll")?n.removeClass("infiniti-scrolling"):(s=n.find("section").length,isotopeLoadMore.hide()),setTimeout((function(){new LazyLoad,o.find(".grid-item-inside").length&&o.find(".grid-item-inside").each((function(){e.itemQueue.push(t(this).find(".grid-item-inside"))})),o.find(".grid-item-mask-link").length&&o.find(".grid-item-mask-link").removeAttr("title")}),10)}))}else n.removeClass("infiniti-scrolling");return!1}))}))},e.fnModuleLoadmore=function(a){var o=a.find(".page_twitter"),i=o.find("> a"),n=a.find(".container-masonry"),r=n.find(".masonry-list"),l=o.data("unique"),s=o.attr("data-moduleid");i.on("click",(function(){var d=t(this),c=t(this).attr("data-postid"),u=(Number(t(this).attr("data-max")),Number(t(this).attr("data-paged"))),f=o.attr("data-pagetext"),g=o.attr("data-loadingtext"),m=0,p=[],h=a.find(".filters"),b=UxCBModModuleIsotope[l],y="ux_cb_module_grid_container";return n.find("section[data-postid]").length,n.hasClass("container-masonry"),"masonry-grid"==s&&(y="ux_cb_module_masonry_grid_container"),r.find("section").each((function(){var e=t(this).attr("data-postid");if(h.length){var a=h.find("li.active"),o=a.find("> a").attr("data-filter");Number(a.find(".filter-num").text());"*"==o?p.push(e):(m=a.find("> a").attr("data-catid"),t(this).is(o)&&p.push(e))}else p.push(e)})),i.text(g),r.hasClass("loading-more")||(r.addClass("loading-more"),t.post(ajaxurl,{action:y,catID:m,postID:c,post__not_in:p,moduleUnique:l,"paged-s":u}).done((function(l){var c=t(l);r.find("section[data-postid]").length;if("masonry-grid"==s?(o.prev().append(c),UxCBModGlobal["masonry-grid"]&&UxCBModGlobal["masonry-grid"].fnGridStackResize(o.prev()),a.find(".grid-stack-item[data-postid]").length):(b.isotope("insert",c),r.hasClass("masonry-grid")&&(e.fnIsotopeListResize(n),b.isotope("layout")),r.find("section[data-postid]").length),i.text(f),r.removeClass("loading-more"),d.attr("data-paged",u+1),h.length){var g=h.find("li.active"),m=g.find("> a").attr("data-filter"),p=Number(g.find(".filter-num").text());"*"!=m?(b.find("section"+m+"[data-postid]").length,p):p}o.hide(),setTimeout((function(){new LazyLoad,c.find(".grid-item-inside").length&&c.find(".grid-item-inside").each((function(){e.itemQueue.push(t(this))})),c.find(".grid-item-mask-link").length&&c.find(".grid-item-mask-link").removeAttr("title")}),10)}))),!1}))},e.fnModuleInfinitiScroll=function(a){var o=a.find(".container-masonry"),i=o.find(".masonry-list"),n=i.data("unique");ScrollTrigger.create({trigger:i.find("section:last"),start:"top bottom",onEnter:function(r){var l=i.attr("data-postid"),s=0,d=0,c=[],u=a.find(".filters"),f=UxCBModModuleIsotope[n];o.hasClass("container-masonry")&&(s=Number(o.attr("data-found"))),i.find("section").each((function(){var e=t(this).attr("data-postid");if(u.length){var a=u.find("li.active"),o=a.find("> a").attr("data-filter");Number(a.find(".filter-num").text());"*"==o?c.push(e):(d=a.find("> a").attr("data-catid"),t(this).is(o)&&c.push(e))}else c.push(e)})),i.hasClass("infiniti-scrolling")||(i.addClass("infiniti-scrolling"),t.post(ajaxurl,{action:"ux_cb_module_grid_container",catID:d,postID:l,post__not_in:c,moduleUnique:n}).done((function(n){var r=t(n);f.isotope("insert",r),i.hasClass("masonry-grid")&&(e.fnIsotopeListResize(o),f.isotope("layout"));var l=i.find("section[data-postid]").length;if(u.length){var d=u.find("li.active"),c=d.find("> a").attr("data-filter"),g=Number(d.find(".filter-num").text());"*"!=c&&(l=f.find("section"+c+"[data-postid]").length,s=g)}l<s&&i.removeClass("infiniti-scrolling"),e.fnModuleInfinitiScroll(a),setTimeout((function(){e.fnModuleAnimationScroll(r.find("*[data-animation]")),new LazyLoad,r.find(".grid-item-mask-link").length&&r.find(".grid-item-mask-link").removeAttr("title")}),100)})))}})},e.fnIsotopeListResize=function(e){var a=window.innerWidth,o=e.find(".masonry-list").width(),i=e.data("spacer"),n=e.data("col"),r=Math.floor(o/n),l=e.data("ratio"),s=e.data("text");a>=768?e.find(".masonry-list").find(".grid-item").each((function(){t(".grid-item").css({width:1*r-i+"px",height:r*l-i+s+"px",margin:.5*i+"px"}),t(".grid-item .ux-lazyload-wrap").css("padding-top",(r*l-i)/(1*r-i)*100+"%")})):(r=Math.floor(o/1),e.find(".masonry-list").find(".grid-item.grid-item-small").each((function(){t(".grid-item").css({width:1*r-i+"px",height:r*l-i+s+"px",margin:.5*i+"px"}),t(".grid-item .ux-lazyload-wrap").css("padding-top",(r*l-i)/(1*r-i)*100+"%")})))},e.fnInit=function(){if(new LazyLoad({elements_selector:".lazy"}),e.module=t(".bm-builder > .module"),e.photoSwipe=t(".lightbox-photoswipe"),e.moduleHasAnimation=t(".module.module-animation"),e.spriteBg=t(".bm-wrap-bg-sprite-wrap"),e.textFills=t(".entry .bm-builder").find(".text-fill"),e.photoSwipe.length&&UxCBInitPhotoSwipeFromDOM(".lightbox-photoswipe"),e.textFills.length&&e.textFills.each((function(){e.fnModuleAnimationTextFill(t(this))})),e.moduleHasAnimation.length&&e.moduleHasAnimation.imagesLoaded((function(){e.moduleHasAnimation.each((function(){let a=t(this).find("*[data-animation]");e.fnModuleAnimationScroll(a)}))})),e.module.length){let a=0;e.module.each((function(o){const i=t(this);let n=i.parent(".bm-builder"),r=i.width(),l=Number(i.attr("data-module-col")),s=0,d="";i.hasClass("col-0")&&(d="col-0");let c=i.attr("class").match(/col-offset-[1-9][0-9]?/);if(c)switch(c[0]){case"col-offset-1":s=1;break;case"col-offset-2":s=2;break;case"col-offset-3":s=3;break;case"col-offset-4":s=4;break;case"col-offset-5":s=5;break;case"col-offset-6":s=6;break;case"col-offset-7":s=7;break;case"col-offset-8":s=8;break;case"col-offset-9":s=9;break;case"col-offset-10":s=10;break;case"col-offset-11":s=11}if(i.attr("data-index",o),a=a+l+s,a>12||0==o||0==l){i.addClass("ux-first-mod-row");var u=t('<div class="bm-row '+d+'" data-index="'+o+'" data-frontcolor="" data-backcolor="" data-logocolor="" data-horizontal=""></div>');n.append(u)}if(a>12&&(a=0+l+s),0==l&&(a=12),i.hasClass("col-0")){e.body.outerWidth();t(window).trigger("resize")}(e.body.hasClass("page")||e.body.hasClass("single")||e.body.hasClass("blog"))&&(i.find(".filters").length&&e.fnModuleFilters(i),i.find(".page_twitter").length&&e.fnModuleLoadmore(i),i.find(".infiniti-scroll").length&&setTimeout((function(){e.fnModuleInfinitiScroll(i)}),20))})),e.module.each((function(e){var a=t(this),o=a.data("change-color"),i=a.data("frontcolor"),n=a.data("backcolor"),r=a.data("logocolor"),l=a.data("goto-top"),s=Number(a.data("goto-top-spacing")),d=a.data("horizontal"),c=a.parent(".bm-builder").find(".bm-row"),u=a.data("groupsameheight");i||(i=""),n||(n="transparent"),c.each((function(){var c=t(this),f=Number(c.data("index")),g=Number(c.next().data("index"));g?e>=f&&e<g&&(c.append(a),"on"==o&&(c.attr("data-change-color",o),""==c.attr("data-frontcolor")&&(c.attr("data-frontcolor",i),c.attr("data-backcolor",n),c.attr("data-logocolor",r),c.attr("data-module",e))),"on"==d&&c.attr("data-horizontal",d),"on"==l&&(c.attr("data-goto-top",l),c.attr("data-goto-top-spacing",s)),"on"==u&&c.attr("data-groupsameheight",u)):e>=f&&(c.append(a),"on"==o&&(c.attr("data-change-color",o),""==c.attr("data-frontcolor")&&(c.attr("data-frontcolor",i),c.attr("data-backcolor",n),c.attr("data-logocolor",r),c.attr("data-module",e))),"on"==d&&c.attr("data-horizontal",d),"on"==l&&(c.attr("data-goto-top",l),c.attr("data-goto-top-spacing",s)),"on"==u&&c.attr("data-groupsameheight",u))})),c.removeAttr("data-index")})),e.module.find(".grid-item-inside").length&&e.module.find(".grid-item-inside").each((function(a,o){t(this).parent().offset().top,e.winScrollTop,e.winHeight})),e.fnModuleParentRowGsap()}},e.doc.ready((function(){UxCBModGlobal&&(UxCBModGlobal.global=e)})),e.win.on("load",(function(){e.fnInit()}))}(jQuery);