var HEIGHT_PIXEL_LIMIT = 150;

// jQuery selector strings
var ORIGINAL_HEIGHT_KEY = "origHeight";
var FIRST_COLUMN_CLASS = "div.first";
var SECOND_COLUMN_CLASS = "div.second";
var BODY = "body";
var INTRO_TEXT_ID = "#introText";
var TOGGLE_LINK_ID = "#toggleLink";
	
// labels
var SHOW_MORE = "Show more";
var SHOW_LESS = "Show less";

// paragraph state
var textExpanded = false;

function initIntroParagrah() {
	if (introExceedsHeightLimit($(INTRO_TEXT_ID).height())) {
		saveOriginalHeights();
		collapseIntroParagraph();
	}
}

function introExceedsHeightLimit( introTextHeight ) {
	return introTextHeight > HEIGHT_PIXEL_LIMIT;
}

function toggleIntroParagraphArea() {
	!textExpanded ? expandIntroParagraph() : collapseIntroParagraph();
}

function expandIntroParagraph() {
	$(INTRO_TEXT_ID).height("auto"); // allow the paragraph to accommodate the text
	$(INTRO_TEXT_ID).css("overflow", "visible");
	
	$(TOGGLE_LINK_ID).text(SHOW_LESS);
	
	expandHeight(FIRST_COLUMN_CLASS);
	expandHeight(SECOND_COLUMN_CLASS);
	expandHeight(BODY);

	textExpanded = true;
}

function collapseIntroParagraph() {
	$(INTRO_TEXT_ID).height(HEIGHT_PIXEL_LIMIT);
	$(INTRO_TEXT_ID).css("overflow", "hidden");
	
	$(TOGGLE_LINK_ID).text(SHOW_MORE);
	$(TOGGLE_LINK_ID).css("visibility", "visible");
	
	collapseHeight(FIRST_COLUMN_CLASS);
	collapseHeight(SECOND_COLUMN_CLASS);
	collapseHeight(BODY);

	textExpanded = false;
}

function saveOriginalHeights() {
	saveHeight(FIRST_COLUMN_CLASS);
	saveHeight(SECOND_COLUMN_CLASS);
	saveHeight(BODY);
}

function expandHeight( identifier )
{
	$(identifier).height( $(identifier).height() + ($(INTRO_TEXT_ID).height() - HEIGHT_PIXEL_LIMIT));
}

function collapseHeight( identifier )
{
	$(identifier).height($(identifier).data(ORIGINAL_HEIGHT_KEY));
}

function saveHeight( identifier )
{
	$(identifier).data(ORIGINAL_HEIGHT_KEY, $(identifier).height());
}