Benchmark React Material design frameworks
===
This is a small performance comparison between `material-ui`, `react-toolbox` and normal html.

- `material-ui`
- `react-toolbox`

Installation and how to run
---
```bash
npm install
npm start

# or build and then serve the dist/ folder

npm run build
npm run serve
```

Conclusion
---
Why did I do this because I've tried out `material-ui` and I was not super happy with their performance.

I haven't done any deep analysis by going though their codebase but I've made a rendering benchmark to see the difference in performance. I was kind of shocked that `material-ui` actually beats `react-toolbox` in performance because `material-ui` uses inline styles and `react-toolbox` uses css modules. I have to say that I only test their List component but difference were so big that I didn't bother evaluate more. In the future I might do that but right now I don't have more time. Please send me some PRs with some more benchmarks!

What did I learn from this? That is very important to pass references within attributes to React components and not creating new instances like `<div onClick={() => doSomething()}/>` or `<div style={{display: 'block'}} />`. I didn't think that it should matter that much but my benchmark tells me another thing and that is that it really matters if you want performance. If you are building a enterprise solution you really have to think about this. You can try this by checking the "Bad props" in my benchmark and you will see a massive fps loss.

I've also created a small iterator component to make optimization for iteration and the result were mind-blowing. I can't get it why React doesn't have something like this built in?
