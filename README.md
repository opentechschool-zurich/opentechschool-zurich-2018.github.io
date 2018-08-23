# opentechschool-zurich.github.io

Website for the opentechschool chapter in zurich

## Local install on Linux

go to the directory with the github.io files and follow the [instructions from Github](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) (plus, in my case, the option to install the files locally)

- `apt install ruby bundler`
- create `Gemfile` with the content:  
  ```
  source 'https://rubygems.org'
  gem 'github-pages', group: :jekyll_plugins
  ```
- `bundle install --path vendor/bundle`
- `bundle exec jekyll serve`
- for the next executions you can simply do `./vendor/bundle/ruby/2.5.0/bin/jekyll serve` (of course eyou can create a link to jekyll in the current directory...)

## Notes

- Jekyll setup inspired by [jekyll-now](https://github.com/barryclark/jekyll-now)
- The `.scss` file must start with two lines with three dashes each.



## goals

- blog about each evening with a summary of the goals achieved
- link / presentation of our resources and offers for the participants
  - js http://opentechschool.github.io/js-beginners-1/ (http://opentechschool.github.io/slides/presentations/coaching/)
  - python
  - RE: https://coderdojopotsdam.github.io/regex-tutorial/steps/
  - project cards
  - coding dojos
- announce "special" events
