"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type SectionKey = "home" | "intro" | "about" | "interests" | "photograph";

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
  { src: "/photos/v1.jpg", alt: "vertical 1", caption: "浪漫情侶⋆𓈒 ♱ ❤︎  ⋆۫", span: "md:row-span-2" },
  { src: "/photos/h1.jpg", alt: "horizontal 1", caption: "‧̍̊˙· 𓆝.° ｡˚𓆛˚｡ °.𓆞 ·˙‧̍̊", span: "md:col-span-2" },
  { src: "/photos/v4-dog.jpg", alt: "vertical 4", caption: "多多白白੯‧̀͡u\೨˒" },
  { src: "/photos/h2.jpg", alt: "horizontal 2", caption: "☆*:.｡. 💙🤍🩵.｡.:*☆" },
  { src: "/photos/v3.jpg", alt: "vertical 3", caption: "🏮꙳𖥧 ⛩️ 𖥧˖ 🎏 ⸝˖𖤐", span: "md:row-span-2" },
  { src: "/photos/h3.jpg", alt: "horizontal 3", caption: "橋上的人都會跟我們打招呼～很可愛", span: "md:col-span-2" },
  { src: "/photos/h4.jpg", alt: "horizontal 4", caption: " ≽₍^_ ‸ _ ^₎≼⟆ 眯眼小咪" },
  { src: "/photos/v5.jpg", alt: "vertical 5", caption: "*ੈ✩‧₊˚𓇼🦭° ⊹", span: "md:row-span-2" },
  { src: "/photos/h7.jpg", alt: "horizontal 7", caption: "第一次跟朋友出國", span: "md:row-span-2" },
  { src: "/photos/v2-new.jpg", alt: "vertical 2", caption: "日本的浪漫情侶" },
  { src: "/photos/h5.jpg", alt: "horizontal 5", caption: "↟𖠰˚ᨒ°大室山↟༄˖°" },
  { src: "/photos/h9-dog.jpg", alt: "horizontal 9", caption: "去當天使的寶寶" },
  { src: "/photos/h6.jpg", alt: "horizontal 6", span: "md:col-span-2", caption: "第二次跟朋友出遊" },
  { src: "/photos/h10.jpg", alt: "horizontal 10", caption: "到處都是鏡子的韓國" },
];

function classNames(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

function Avatar({
  name,
  src,
  active = false,
}: {
  name: string;
  src?: string;
  active?: boolean;
}) {
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
    <div
      className={classNames(
        "relative h-24 w-24 overflow-hidden rounded-full ring-1 transition-all duration-500 sm:h-32 sm:w-32",
        active
          ? "scale-[1.06] ring-white/50 shadow-[0_12px_30px_rgba(255,255,255,0.18)]"
          : "ring-black/10 hover:scale-105"
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${name} avatar`}
          fill
          sizes="128px"
          className={classNames(
            "object-cover transition-transform duration-500",
            active ? "scale-[1.15]" : "scale-110"
          )}
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

      <div
        className={classNames(
          "pointer-events-none absolute inset-0 transition-all duration-500",
          active ? "bg-white/16 backdrop-blur-[2px]" : "bg-white/0"
        )}
      />

      <div
        className={classNames(
          "pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500",
          active
            ? "opacity-100 bg-[linear-gradient(145deg,rgba(255,255,255,0.4)_8%,rgba(255,255,255,0.12)_36%,rgba(255,255,255,0.02)_62%,rgba(255,255,255,0.18)_100%)]"
            : "opacity-0"
        )}
      />

      <div
        className={classNames(
          "pointer-events-none absolute -left-2 top-2 h-10 w-20 rotate-[-25deg] rounded-full bg-white/30 blur-md transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0"
        )}
      />
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
        <p className="text-sm leading-6 text-zinc-800 sm:text-base sm:leading-7">
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
        "min-w-0 rounded-[28px] bg-white/72 p-4 ring-1 ring-black/5 shadow-sm backdrop-blur-md sm:p-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<SectionKey>("home");
  const [mounted, setMounted] = useState(false);

        useEffect(() => {
          setMounted(true);
        }, []);

  return (
    <div className="min-h-dvh bg-linear-to-br from-[#817483]/70 via-[#817483]/55 to-[#d7e3f1]/70">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-4 px-3 py-4 sm:px-4 sm:py-6 md:gap-6 md:px-6 md:py-8 lg:grid-cols-[272px_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-10 xl:grid-cols-[304px_minmax(0,1fr)] xl:px-10">
        <aside className="w-full lg:sticky lg:top-6 lg:self-start">
          <Card className="space-y-4 overflow-visible bg-white/78 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:space-y-5 sm:p-5">
            <div className="flex flex-col items-center text-center">
              <button
                type="button"
                onClick={() => setActive("home")}
                className={classNames(
                  "rounded-full transition-all duration-300",
                  active === "home" ? "scale-[1.03]" : "hover:scale-105"
                )}
              >
                <Avatar
                  name="Pei Pei"
                  src="/DSC09408.JPG"
                  active={active === "home"}
                />
              </button>

              <div className="mt-2 w-full min-w-0 sm:mt-3">
                <div className="truncate text-base font-extrabold tracking-[0.02em] text-zinc-900 sm:text-[18px]">
                  彭霈霈 PEIPEI PENG
                </div>
                <div className="truncate text-xs text-zinc-500 sm:text-sm">
                  22y / NCCU AD / NCCU DCT
                </div>
              </div>
            </div>

            <div className="mt-1 text-center text-sm leading-5 text-zinc-500 sm:leading-6">
              彭霈霈彭葳葳彭多多彭白白
              <br />
              從哪裡開始是狗
            </div>

            <nav className="space-y-2 sm:space-y-3">
              <div className="text-sm font-semibold tracking-wide text-zinc-700 sm:text-base">
                目錄
              </div>

              <div className="-mx-2 flex gap-2 overflow-x-auto overflow-y-visible px-2 py-2 lg:hidden">
                {SECTIONS.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActive(s.key)}
                    className={classNames(
                      "shrink-0 rounded-full px-4 py-2 text-sm ring-1 transition-all duration-300",
                      active === s.key
                        ? "bg-[#817483]/75 text-white ring-[#817483]/80 shadow-md"
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
                      "w-full rounded-2xl px-3 py-3 text-left text-sm ring-1 transition-all duration-300 sm:px-5 sm:py-4 sm:text-lg",
                      active === s.key
                        ? "bg-[#817483]/75 text-white ring-[#817483]/80 shadow-md"
                        : "bg-white text-zinc-800 ring-black/5 hover:-translate-y-0.5 hover:bg-zinc-50"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="rounded-2xl bg-white p-2 ring-1 ring-black/5 sm:p-3">
                <div className="text-[10px] font-semibold text-zinc-500 sm:text-xs">
                  Email
                </div>
                <div className="mt-1 overflow-x-auto whitespace-nowrap text-[11px] font-medium text-zinc-900 sm:text-sm">
                  112405081@g.nccu.edu.tw
                </div>
              </div>
              <div className="rounded-2xl bg-white p-2 ring-1 ring-black/5 sm:p-3">
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
            {active === "home" ? (
              <Card className="relative min-h-[320px] overflow-hidden p-0 sm:min-h-[420px]">
                <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] sm:h-[560px]">
                  <Image
                  src="/home.jpg"
                  alt="home banner"
                  fill
                  priority
                  className={classNames(
                    "object-cover transition-transform duration-[4000ms] ease-out",
                    mounted ? "scale-110" : "scale-[1.02]"
                  )}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#817483]/80 via-black/10 to-white/10" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                    <div className="max-w-2xl rounded-[24px] sm:p-6">
                      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                        Home
                      </h2>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
                        歡迎來到我的個人履歷～這裡收藏了我的經歷、興趣與攝影日常。
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ) : null}

            {active === "intro" ? (
              <Card className="relative min-h-[560px] overflow-hidden p-5 transition-all duration-300 hover:shadow-2xl sm:min-h-[711px] sm:p-8">
                <Image
                  src="/about2.jpg"
                  alt="about background"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 space-y-6 sm:space-y-9">
                  <SectionTitle title="About me" />

                  <div className="rounded-[24px] bg-white/34 p-5 ring-1 ring-black/5 shadow-sm backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/42 hover:shadow-xl sm:p-7">
                    <ul className="space-y-3 text-sm leading-6 text-zinc-900 sm:text-base">
                      <li>
                        大家好我是ㄆㄆㄆ～目前就讀政大廣告系三年級、雙主修數位內容學程（真的好難இдஇ）
                      </li>
                      <li>喜歡設計、攝影，還在慢慢摸索自己的風格中。</li>
                      <li>非常內向的INFP，喜歡胡思亂想</li>
                    </ul>
                  </div>

                  <div className="rounded-[24px] bg-white/34 p-5 ring-1 ring-black/5 shadow-sm backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/42 hover:shadow-xl sm:p-7">
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
              <Card className="relative overflow-hidden p-5 transition-all duration-300 hover:shadow-2xl sm:p-8">
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
                        className="group flex flex-col space-y-4 rounded-[24px] bg-white/34 p-4 ring-1 ring-black/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/42 hover:shadow-xl sm:p-5"
                      >
                        <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                          {item.title}
                        </h3>

                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-black/5">
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
              <Card className="relative overflow-hidden p-5 transition-all duration-300 hover:shadow-2xl sm:p-8">
                <Image
                  src="/about2.jpg"
                  alt="interests background"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 space-y-6">
                  <SectionTitle title="Interests" subtitle="不務正業的熱舞系" />

                  <div className="rounded-[24px] bg-white/34 p-5 ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:bg-white/42 hover:shadow-xl sm:p-7">
                    <div className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                      College High 世界大學街舞高峰會
                    </div>

                    <div className="mt-6 space-y-8">
                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十一屆 Hip Hop 四強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/ppkvY5O6078"
                          allowFullScreen
                        />
                      </div>

                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十一屆 Female 八強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/4VRS46HU9Cw"
                          allowFullScreen
                        />
                      </div>

                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十屆 Hip Hop 八強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
                          src="https://www.youtube.com/embed/Dj3AhDceHWQ"
                          allowFullScreen
                        />
                      </div>

                      <div>
                        <div className="mb-3 text-xl font-semibold text-zinc-800">
                          二十屆 Female 八強
                        </div>
                        <iframe
                          className="w-full aspect-video rounded-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
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
              <Card className="relative overflow-hidden p-5 transition-all duration-300 hover:shadow-2xl sm:p-8">
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
                          "group relative overflow-hidden rounded-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                          item.span
                        )}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />

                        <div className="absolute inset-0 flex translate-y-4 items-end p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="rounded-xl px-3 py-2 text-sm text-white ">
                            {item.caption}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ) : null}

            <div className="px-1 pb-4 text-xs text-zinc-600">
              © {new Date().getFullYear()} PEIPEI PENG — RESUME
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}