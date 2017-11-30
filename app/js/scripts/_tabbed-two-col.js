var tabs = $(".two-col-tab-multiTabs a");
var twoCol = $("two-col")


$(tabs).on("click", function (e) {
    
    e.preventDefault();
    var displayMe = (this.hash);

    $(tabs).removeClass("activeTab");
    $(this).addClass("activeTab");
     
    
    $(displayMe).siblings().addClass("hidden");
    
    $(displayMe).fadeIn(1000).css("display", "").removeClass("hidden");

});
