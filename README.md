# Chlorophyl - A statically generated plant database.
Catalogue all your plants! Made with Eleventy.

## Installation

Clone this repo:

	git clone https://github.com/antoni-devlin/chlorophyl.git

Install dependencies by running the following from within the `chlorophyl` folder:

	npm install

Run the following to build the site for the first time:

	npm run build-prod

This generates everything you need to get started.

Run the following to serve the site locally and start making it your own!

	npm start

## Usage

The project is designed to be used as a static site generator. You don't need to do anything except creating new Plant Pages, unless you want to.

It come with one Plant Page already, which you can edit and use as a template.

	### Plant page template
	---
	plant:
	  name: "Plant name"
	  type: "Plant type"
	  latin_name: Plantius Typicus
	image:
	  path: "/images/test-plant.jpg"
	  alt: "Some alt text for your plant image!"
	---
	
	# Plant Page Content
	
	Etiam ut congue justo. Sed luctus congue odio, sed consequat dolor elementum nec. Quisque commodo vulputate mauris ac tristique. Etiam nibh lorem, blandit quis fermentum sit amet, vulputate a erat. Vivamus efficitur auctor lorem, nec tristique risus porta ut. Mauris id eros ac augue vehicula tincidunt in ac diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id.
 
 Make copies of this as needed.

 ## Images

 Images are stored in the `src/images` directory. These need to be linked to in the Plant Page template front matter.

	image:
	  path: "/images/test-plant.jpg"
	  alt: "Some alt text for your plant image!"
