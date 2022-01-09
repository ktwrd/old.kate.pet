const data = [
    {
        link: `https://www.youtube.com/watch?v=0_WHBBsiIWw`,
        name: `Emba & Telomic - Silver Lining (ft. Leah Rye)`,
        file: `silver_lining.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=QAt1qoNxvLs`,
        name: `Fox Stevenson - Don't Care Crown`,
        file: `dont_care_crown.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=EiDczV9lrkU`,
        name: `Fox Stevenson - All Eyes On Me`,
        file: `all_eyes_on_me.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=KIje2CrqhpM`,
        name: `Fox Stevenson - Glue Gun`,
        file: `glue_gun.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=_LM2A4BVfEQ`,
        name: `Fox Stevenson - Knowhow`,
        file: `knowhow.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=mVvqTSXOIng`,
        name: `Fox Stevenson - Broken Man`,
        file: `broken_man.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=yHgIYfNF8kY`,
        name: `t+pazolite - Oshama Scramble!`,
        file: `oshama_scramble.mp3`
    },
    {
        link: `https://soundcloud.com/seedvevo/tpazolite-to-luv-me-i-xxx-for-uuno-remix`,
        name: `t+pazolite - To Luv Me I Xxx For U. (uno Remix)`,
        file: `to_luv_me_i_xxx_for_u_uno_remix.mp3`
    },
    {
        link: `https://soundcloud.com/saikocho/vo-lost-umbrella`,
        name: `inabakumori - Lost Umbrella`,
        file: `lost_umbrella.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=JDmlwBbWrQU`,
        name: `Fox Stevenson - Dreamland`,
        file: `dreamland.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=1HLERS1l5s8`,
        name: `Mitekiss - City Angels (ft. Milo Merah & RSWT)`,
        file: `city_angels.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=R0ppOs2o-cw`,
        name: `Dimension - Saviour (ft. Sharlene Hector)`,
        file: `saviour.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=ovZNf7Nztw4`,
        name: `Fox Stevenson - Still Here`,
        file: `still_here.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=L9Vz4r9IEaw`,
        name: `Greg Packer - Peoples Music`,
        file: `peoples_music.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=smXG7OvMrFI`,
        name: `Sub Focus & Wilkinson - Freedom (Sub Focus & Wilkinson vs. High Contrast Remix)`,
        file: `subfocus_freedom.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=QXg6h0jOBb8`,
        name: `Brookes Brothers - Not Just Yet`,
        file: `not_just_yet.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=EXji6YQqI1w`,
        name: `Brookes Brothers - New Wave`,
        file: `new_wave.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=E29kpquu8W4`,
        name: `Etherwood - Give It Up`,
        file: `give_it_up.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=RiuiI1lxBNM`,
        name: `S.P.Y - Step & Flow (VIP)`,
        file: `step_and_flow.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=riHQtKStE-U`,
        name: `nu:tone - Do It Right`,
        file: `do_it_right.mp3`
    },
    {
        link: `https://notebookrecordsjp.bandcamp.com/track/bitmap-fantasy`,
        name: `DJ Laugh feat.ちよこ - Bitmap Fantasy `,
        file: `bitmap_fantasy.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=HfkSwLSvR_c`,
        name: `t+pazolite - Elder Dragon Legend (feat. かぼちゃ) #TPZREMAKE`,
        file: `elder_dragon_legend.mp3`
    },
    {
        link: `https://www.youtube.com/watch?v=3hPfbnCSp3s`,
        name: `t+pazolite - Cheatreal`,
        file: `cheatreal_tpzremake.mp3`
    }
];

module.exports = {
    data,
    select: () => {
        let target = data[Math.floor(Math.random() * data.length)];
        target.url = `http://res.kate.pet/pageaudio/${target.file}`;
        return target;
    }
};
