---
layout: 'layouts/homepage.html'
title: 'Home'
---
{% for item in collections.plants | reverse  %}
<div class=card onclick="location.href='{{item.url}}';">
		<img class=image
			src="{{item.data.image.path}}" alt="{{item.data.image.alt}}"></img>
		<div class="info-box">
			<h2 class="plant-name">{{item.data.plant.name}}</h2>
			<h3 class="plant-type">{{item.data.plant.type}}</h3>
			<h4 class="plant-latin-name">{{item.data.plant.latin_name}}</h4>
		</div>
	</div>
{% endfor  %}