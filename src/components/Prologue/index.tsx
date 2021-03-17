import React, { FC, useEffect, useState } from "react";
import BookBackground from "../../assets/bg/book_t.png";

import "./Prologue.css";
import Zh from "../../assets/img/langu_cn.png";
import ZhSelected from "../../assets/img/langu_cn_l.png";
import PrologueZh from "../../assets/fg/preface_cn.png";
import SwitcherZh from "../../assets/fg/selectboard_cn.png";
import YesZh from "../../assets/img/yes_cn.png";

import Jp from "../../assets/img/langu_jp.png";
import JpSelected from "../../assets/img/langu_jp_l.png";
import PrologueJp from "../../assets/fg/preface_jp.png";
import SwitcherJp from "../../assets/fg/selectboard_jp.png";
import YesJp from "../../assets/img/yes_jp.png";

import En from "../../assets/img/langu_en.png";
import EnSelected from "../../assets/img/langu_en_l.png";
import PrologueEn from "../../assets/fg/preface_en.png";
import SwitcherEn from "../../assets/fg/selectboard_en.png";
import YesEn from "../../assets/img/yes_en.png";

type supportLanguage = "Zh" | "En" | "Jp";

interface PrologueProps {
  goToContent(): void;
}

const Prologue: FC<PrologueProps> = ({ goToContent }: PrologueProps) => {
  const [lang, setLang] = useState<supportLanguage>("Zh");
  const [paths, setPaths] = useState({
    prologue: PrologueZh,
    switcher: SwitcherZh,
    zh: ZhSelected,
    jp: Jp,
    en: En,
    yes: YesZh,
  });

  useEffect(() => {
    switch (lang) {
      case "Zh":
        setPaths({ prologue: PrologueZh, switcher: SwitcherZh, zh: ZhSelected, jp: Jp, en: En, yes: YesZh });
        break;
      case "Jp":
        setPaths({ prologue: PrologueJp, switcher: SwitcherJp, zh: Zh, jp: JpSelected, en: En, yes: YesJp });
        break;
      case "En":
      default:
        setPaths({ prologue: PrologueEn, switcher: SwitcherEn, zh: Zh, jp: Jp, en: EnSelected, yes: YesEn });
    }
  }, [lang]);

  const switchToLang = (language: supportLanguage) => () => {
    setLang(language);
  };

  return (
    <div className={"section"} style={{ backgroundImage: `url(${BookBackground})` }}>
      <div className={"section"} style={{ backgroundImage: `url(${paths.prologue})` }}>
        <div className={"page"} />
        <div className={"page"} id={"prologue-right"}>
          <div id={"message"} style={{ backgroundImage: `url(${paths.switcher})` }}>
            <div id={"message-yes"} style={{ backgroundImage: `url(${paths.yes})` }} onClick={goToContent} />
          </div>
          <div id={"choose-language"}>
            <div className={"language"} style={{ backgroundImage: `url(${paths.zh})` }} onClick={switchToLang("Zh")} />
            <div className={"language"} style={{ backgroundImage: `url(${paths.jp})` }} onClick={switchToLang("Jp")} />
            <div className={"language"} style={{ backgroundImage: `url(${paths.en})` }} onClick={switchToLang("En")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prologue;
