---
layout: layout.njk
title: Sad Robot
---

# Sad Robot

I don't consider myself a novelist. Not even really as a writer. But I do like stories and visions of the future. However, I'm pretty picky and can't really find many stories that I would consider positive sci-fi. 

Optimistic views of the future and technology. And maybe there isn't even a market for these types of stories. The 20th century has conditioned us to a skeptical attitude towards technology and a gloomy view of the future.
Just to stay sane in this eternal gloomy view of work, I sometimes think about beautiful futures. 

Hence this little page where I throw the little snippets of ideas. The time to make a book or a coherent story out of it will probably never be found. 

I call this repository "sad robot" because a pubescent philosophical question once occurred to me. What would make my vacuum cleaner robot sad? I affectionately call him Robbie. And yes, he is male. What would I do to cheer him up? Spill an extra helping of mop on the floor?

So dear visitor who happened to stumble across these files, be warned. Don't expect an exciting pen pal relationship. Read on, if you like.


## Drafts

<ul>
{%- for chapter in collections.chapter -%}
  <li><a href="{{ chapter.url | url }}">{{ chapter.data.title }}</a></li>
{%- endfor -%}
</ul>