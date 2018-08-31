# OpenTechSchool in Zürich

OpenTechSchool is a [wordlwide community initiative](http://www.opentechschool.org/) offering free programming workshops and meetups to technology enthusiasts of all genders, backgrounds, and experience levels. OTS’ main goal is to create a friendly learning environment where no one feels shy about asking any question. Everyone is invited to participate, whether as a coach or a learner, and get in contact to organize new OTS events.

## The Zurich Co-Learning groups

Each Tuesday (and most Sundays), the OpenTechSchool Co-Learning group meets in the Liip Arena (and sometimes at other places...). We make our first steps in programming or improve our coding skills.

Currently we have three groups:

- Python
- C++ for beginners
- C++ for intermediates

Our main language is English, but we speak also German, Italian, French and Spanish!

## Activity

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
