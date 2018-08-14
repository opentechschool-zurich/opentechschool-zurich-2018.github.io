# OpenTechSchool Zurich

Each Tuesday, the OpenTechSchool Co-Learning group meets in the Liip Arena (and sometimes at other places...) We our first steps in programming or improve our coding skills.

Currently we have three groups:

- Python
- C++ for beginners
- C++ for intermediates

Our main language is English, but we speak also German, Italian, French and Spanish!

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
