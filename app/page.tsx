"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type SectionKey = "intro" | "about" | "interests" | "photograph";

type Section = {
  key: SectionKey;
  label: string;
};

type ExperienceItem = {
  title: string;
  imageSrc?: string;
  note?: string;
};

type PhotographyItem = {
  src: string;
  alt: string;
  caption: string;
  span?: string;
};

const SECTIONS: Section[] = [
  { key: "intro", label: "About me" },
  { key: "about", label: "Experience" },
  { key: "interests", label: "Interests" },
  { key: "photograph", label: "Photography" },
];

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: "27/28屆政大廣電營",
    imageSrc: "/exp1.jpg",
    note: "認識了很多有趣的人～在美企組設計能力也進步很多。",
  },
  {
    title: "2026政大徵才月",
    imageSrc: "/exp2.jpg",
    note: "成為無情的製圖機器。",
  },
  {
    title: "熱舞社幹訓總召",
    imageSrc: "/exp3.jpg",
    note: "卸幹前的最後一個活動！開心玩，也很累。",
  },
  {
    title: "虎牌啤酒企劃案",
    imageSrc: "/exp5.jpg",
    note: "開會開到成為商院地縛靈～苦盡甘來獲得第二名！",
  },
];

const PHOTOGRAPHY_ITEMS: PhotographyItem[] = [
  { src: "/photos/v1.jpg", alt: "vertical 1", caption: "去阿姆斯特丹看到的浪漫情侶1", span: "md:row-span-2" },
  { src: "/photos/h1.jpg", alt: "horizontal 1", caption: "亮亮的水面", span: "md:col-span-2" },
  { src: "/photos/v4-dog.jpg", alt: "vertical 4", caption: "多多白白" },
  { src: "/photos/h2.jpg", alt: "horizontal 2", caption: "亮亮的水面2" },
  { src: "/photos/v3.jpg", alt: "vertical 3", caption: "日本的軌道", span: "md:row-span-2" },
  { src: "/photos/h3.jpg", alt: "horizontal 3", caption: "橋上的人都會跟我們打招呼～很可愛", span: "md:col-span-2" },
  { src: "/photos/h4.jpg", alt: "horizontal 4", caption: "眯眼小咪" },
  { src: "/photos/v5.jpg", alt: "vertical 5", caption: "日本的海", span: "md:row-span-2" },
  { src: "/photos/h7.jpg", alt: "horizontal 7", caption: "第一次跟朋友出國", span: "md:row-span-2" },
  { src: "/photos/v2-new.jpg", alt: "vertical 2", caption: "浪漫情侶2" },
  { src: "/photos/h5.jpg", alt: "horizontal 5", caption: "大室山" },
  { src: "/photos/h9-dog.jpg", alt: "horizontal 9", caption: "去當天使的寶寶" },
  { src: "/photos/h6.jpg", alt: "horizontal 6", span: "md:col-span-2", caption: "第二次跟朋友出遊" },
  { src: "/photos/h10.jpg", alt: "horizontal 10", caption: "到處都是鏡子的韓國" },
];

function classNames(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

function Avatar({ name, src }: { name: string; src?: string }) {
  const initials = useMemo(() => {
    const trimmed = name.trim();
    if (!trimmed) return "ME";
    const hasCJK = /[\u3400-\u9FFF]/.test(trimmed);
    if (hasCJK) return trimmed.slice(-2);
    return trimmed
      .split(/\s+/)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");
  }, [name]);

  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/10 transition-transform duration-500 hover:scale-105 sm:h-32 sm:w-32">
      {src ? (
        <Image
          src={src}
          alt={`${name} avatar`}
          fill
          sizes="128px"
          className="scale-110 object-cover"
          priority
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="select-none text-xl font-semibold tracking-wide text-white">
              {initials}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-sm leading-6 text-zinc-950 sm:text-base sm:leading-7">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "min-w-0 rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-sm sm:p-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<SectionKey>("intro");

  return (
    <div className="min-h-dvh bg-linear-to-br from-[#817483]/70 via-[#817483]/55 to-[#d7e3f1]/70">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-4 px-3 py-4 sm:px-4 sm:py-6 md:gap-6 md:px-6 md:py-8 lg:grid-cols-[272px_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-10 xl:grid-cols-[304px_minmax(0,1fr)] xl:px-10">
        <aside className="w-full lg:sticky lg:top-6 lg:self-start">
          <Card className="space-y-4 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:space-y-5 sm:p-5">
            <div className="flex flex-col items-center text-center">
              <Avatar name="Pei Pei" src="/DSC09408.JPG" />
              <div className="mt-2 w-full min-w-0 sm:mt-3">
                <div className="truncate text-base font-extrabold text-zinc-900 sm:text-[18px]">
                  彭霈霈 PEIPEI PENG
                </div>
                <div className="truncate text-xs text-zinc-400 sm:text-sm">
                  22y / NCCU AD / NCCU DCT
                </div>
              </div>
            </div>

            <div className="mt-1 text-center text-sm leading-5 text-zinc-600 sm:leading-6">
              彭霈霈彭葳葳彭多多彭白白
              <br />
              從哪裡開始是狗
            </div>

            <nav className="space-y-2 sm:space-y-3">
              <div className="text-sm font-semibold tracking-wide text-zinc-600 sm:text-base">
                目錄
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {SECTIONS.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActive(s.key)}
                    className={classNames(
                      "shrink-0 rounded-full px-4 py-2 text-sm ring-1 transition-all duration-300",
                      active === s.key
                        ? "bg-[#817483]/60 text-white ring-[#817483]/80"
                        : "bg-white text-zinc-800 ring-black/5 hover:bg-zinc-50"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="hidden gap-2 sm:gap-3 lg:grid">
                {SECTIONS.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActive(s.key)}
                    className={classNames(
                      "w-full rounded-xl px-3 py-3 text-left text-sm ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:px-5 sm:py-4 sm:text-lg",
                      active === s.key
                        ? "bg-[#817483]/60 text-white ring-[#817483]/80"
                        : "bg-white text-zinc-800 ring-black/5 hover:bg-zinc-50"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="rounded-xl bg-white p-2 ring-1 ring-black/5 sm:p-3">
                <div className="text-[10px] font-semibold text-zinc-500 sm:text-xs">
                  Email
                </div>
                <div className="mt-1 overflow-x-auto whitespace-nowrap text-[11px] font-medium text-zinc-900 sm:text-sm">
                  112405081@g.nccu.edu.tw
                </div>
              </div>
              <div className="rounded-xl bg-white p-2 ring-1 ring-black/5 sm:p-3">
                <div className="text-[10px] font-semibold text-zinc-500 sm:text-xs">
                  Location
                </div>
                <div className="mt-1 truncate text-[11px] font-medium text-zinc-900 sm:text-sm">
                  Taiwan
                </div>
              </div>
            </div>
          </Card>
        </aside>

        <main className="min-w-0 w-full pr-0 md:pr-2">
          <div className="space-y-8">
            {active === "intro" ? (
              <Card className="relative min-h-[560px] overflow-hidden p-5 transition-all duration-500 hover:shadow-2xl sm:min-h-[711px] sm:p-8">
                <Image
                  src="/about2.jpg"
                  alt="about background"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 space-y-6 sm:space-y-9">
                  <SectionTitle title="About me" />

                  <div className="rounded-2xl bg-white/30 p-5 ring-1 ring-black/5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl sm:p-7">
                    <ul className="space-y-3 text-sm leading-6 text-zinc-900 sm:text-base">
                      <li>
                        大家好我是ㄆㄆㄆ～目前就讀政大廣告系三年級、雙主修數位內容學程（真的好難இдஇ）
                      </li>
                      <li>喜歡設計、攝影，還在慢慢摸索自己的風格中。</li>
                      <li>非常內向的INFP，喜歡胡思亂想</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white/30 p-5 ring-1 ring-black/5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl sm:p-7">
                    <div className="text-lg font-semibold text-zinc-900">
                      Skills
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Illustrator", "Figma", "Strategic Insight"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-4 py-2 text-base font-medium text-zinc-800 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ) : null}

            {active === "about" ? (
              <Card className="relative overflow-hidden p-5 transition-all duration-500 hover:shadow-2xl sm:p-8">
                <Image
                  src="/about2.jpg"
                  alt="experience background"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 space-y-6">
                  <SectionTitle title="Experience" subtitle="一些小經歷" />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {EXPERIENCE_ITEMS.map((item) => (
                      <div
                        key={item.title}
                        className="group flex flex-col space-y-4 rounded-2xl bg-white/30 p-4 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl sm:p-5"
                      >
                        <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                          {item.title}
                        </h3>

                        <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-black/5">
                          <Image
                            src={item.imageSrc!}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="text-sm text-zinc-700 sm:text-base">
                          {item.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ) : null}

            {active === "interests" ? (
              <Card className="relative overflow-hidden p-5 transition-all duration-500 hover:shadow-2xl sm:p-8">
                <Image
                  src="/about2.jpg"
                  alt="interests background"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 space-y-6">
                  <SectionTitle title="Interests" subtitle="不務正業的熱舞系" />

                  <div className="rounded-2xl bg-white/30 p-5 ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:bg-white/40 hover:shadow-xl sm:p-7">
                    <div className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                      College High 世界大學街舞高峰會
                    </div>

                    <div className="mt-6 space-y-8">
                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十一屆 Hip Hop 四強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/ppkvY5O6078"
                          allowFullScreen
                        />
                      </div>

                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十一屆 Female 八強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/4VRS46HU9Cw"
                          allowFullScreen
                        />
                      </div>

                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十屆 Hip Hop 八強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/Dj3AhDceHWQ"
                          allowFullScreen
                        />
                      </div>

                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十屆 Female 八強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/7c6p-tKgwn8"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ) : null}

            {active === "photograph" ? (
              <Card className="relative overflow-hidden p-5 transition-all duration-500 hover:shadow-2xl sm:p-8">
                <Image
                  src="/about2.jpg"
                  alt="photography background"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 space-y-6">
                  <SectionTitle title="Photography" subtitle="一些日常隨手拍。" />

                  <div className="grid grid-cols-2 auto-rows-[120px] gap-3 sm:auto-rows-[140px] sm:gap-4 md:grid-cols-3 md:auto-rows-[220px]">
                    {PHOTOGRAPHY_ITEMS.map((item, idx) => (
                      <div
                        key={idx}
                        className={classNames(
                          "group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                          item.span
                        )}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/45" />

                        <div className="absolute inset-0 flex translate-y-4 items-end p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="text-sm text-white">{item.caption}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ) : null}

            <div className="px-1 pb-4 text-xs text-zinc-500">
              © {new Date().getFullYear()} PEIPEI PENG — RESUME
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}