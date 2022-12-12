<script lang="ts">
  import IconGitHub from './icons/IconGitHub.svelte';
  import IconTwitter from './icons/IconTwitter.svelte';
</script>

<div class="flex max-w-xl flex-col items-center justify-center">
  <div class="h-60 w-60 rounded-full bg-slate-300" />
  <p
    class="mt-8 text-center font-barlow-semi text-4xl font-semibold tracking-wider text-slate-800"
  >
    KOYAMA SHIGEHITO
  </p>
  <p class="mt-2 text-xl font-bold text-slate-800">小山樹人</p>
  <div class="mt-10 max-w-4xl text-base leading-7">
    <p class="mt-3">静岡県生まれ、東京在住の会社員。</p>
    <p class="mt-3">
      信州大学卒業後、桑沢デザイン研究所の夜間部でグラフィックデザインを学ぶ。卒業後は専門誌や教育系の出版物を中心にDTP制作の仕事を行う。
    </p>
    <p class="mt-3">
      最近の関心事はWeb技術とUIデザインの学習、趣味は将棋と散歩。
    </p>
    <p class="mt-3">妻と 1 歳の子供、2 匹の猫と共に生活しています。</p>
  </div>

  <div class="mt-8 flex gap-8">
    <a href="https://github.com/K-shigehito" class="flex gap-2 font-bold">
      GitHub
      <span class="h-6 w-6 text-slate-600">
        <IconGitHub />
      </span>
    </a>
    <a href="https://twitter.com/chabatake5" class="flex gap-2 font-bold">
      Twitter
      <span class="h-6 w-6 text-slate-600">
        <IconTwitter />
      </span>
    </a>
  </div>
</div>
