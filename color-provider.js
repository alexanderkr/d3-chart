
const INITIAL_COLOR_GROUP = 5;
const INITIAL_COLOR = 0;
const UNDEFINED_COLOR = -1;

class ColorProvider {


    constructor() {
        this.colors =
            {
                "50": [
                    {
                        "name": "red_50",
                        "color": "#fde0dc"
                    },
                    {
                        "name": "pink_50",
                        "color": "#fce4ec"
                    },
                    {
                        "name": "purple_50",
                        "color": "#f3e5f5"
                    },
                    {
                        "name": "deep_purple_50",
                        "color": "#ede7f6"
                    },
                    {
                        "name": "indigo_50",
                        "color": "#e8eaf6"
                    },
                    {
                        "name": "blue_50",
                        "color": "#e7e9fd"
                    },
                    {
                        "name": "light_blue_50",
                        "color": "#e1f5fe"
                    },
                    {
                        "name": "cyan_50",
                        "color": "#e0f7fa"
                    },
                    {
                        "name": "teal_50",
                        "color": "#e0f2f1"
                    },
                    {
                        "name": "green_50",
                        "color": "#d0f8ce"
                    },
                    {
                        "name": "light_green_50",
                        "color": "#f1f8e9"
                    },
                    {
                        "name": "lime_50",
                        "color": "#f9fbe7"
                    },
                    {
                        "name": "yellow_50",
                        "color": "#fffde7"
                    },
                    {
                        "name": "amber_50",
                        "color": "#fff8e1"
                    },
                    {
                        "name": "orange_50",
                        "color": "#fff3e0"
                    },
                    {
                        "name": "deep_orange_50",
                        "color": "#fbe9e7"
                    },
                    {
                        "name": "brown_50",
                        "color": "#efebe9"
                    },
                    {
                        "name": "grey_50",
                        "color": "#fafafa"
                    },
                    {
                        "name": "blue_grey_50",
                        "color": "#eceff1"
                    }
                ],
                "100": [
                    {
                        "name": "red_100",
                        "color": "#f9bdbb"
                    },
                    {
                        "name": "pink_100",
                        "color": "#f8bbd0"
                    },
                    {
                        "name": "purple_100",
                        "color": "#e1bee7"
                    },
                    {
                        "name": "deep_purple_100",
                        "color": "#d1c4e9"
                    },
                    {
                        "name": "indigo_100",
                        "color": "#c5cae9"
                    },
                    {
                        "name": "blue_100",
                        "color": "#d0d9ff"
                    },
                    {
                        "name": "light_blue_100",
                        "color": "#b3e5fc"
                    },
                    {
                        "name": "cyan_100",
                        "color": "#b2ebf2"
                    },
                    {
                        "name": "teal_100",
                        "color": "#b2dfdb"
                    },
                    {
                        "name": "green_100",
                        "color": "#a3e9a4"
                    },
                    {
                        "name": "light_green_100",
                        "color": "#dcedc8"
                    },
                    {
                        "name": "lime_100",
                        "color": "#f0f4c3"
                    },
                    {
                        "name": "yellow_100",
                        "color": "#fff9c4"
                    },
                    {
                        "name": "amber_100",
                        "color": "#ffecb3"
                    },
                    {
                        "name": "orange_100",
                        "color": "#ffe0b2"
                    },
                    {
                        "name": "deep_orange_100",
                        "color": "#ffccbc"
                    },
                    {
                        "name": "brown_100",
                        "color": "#d7ccc8"
                    },
                    {
                        "name": "grey_100",
                        "color": "#f5f5f5"
                    },
                    {
                        "name": "blue_grey_100",
                        "color": "#cfd8dc"
                    }
                ],
                "200": [
                    {
                        "name": "red_200",
                        "color": "#f69988"
                    },
                    {
                        "name": "pink_200",
                        "color": "#f48fb1"
                    },
                    {
                        "name": "purple_200",
                        "color": "#ce93d8"
                    },
                    {
                        "name": "deep_purple_200",
                        "color": "#b39ddb"
                    },
                    {
                        "name": "indigo_200",
                        "color": "#9fa8da"
                    },
                    {
                        "name": "blue_200",
                        "color": "#afbfff"
                    },
                    {
                        "name": "light_blue_200",
                        "color": "#81d4fa"
                    },
                    {
                        "name": "cyan_200",
                        "color": "#80deea"
                    },
                    {
                        "name": "teal_200",
                        "color": "#80cbc4"
                    },
                    {
                        "name": "green_200",
                        "color": "#72d572"
                    },
                    {
                        "name": "light_green_200",
                        "color": "#c5e1a5"
                    },
                    {
                        "name": "lime_200",
                        "color": "#e6ee9c"
                    },
                    {
                        "name": "yellow_200",
                        "color": "#fff59d"
                    },
                    {
                        "name": "orange_200",
                        "color": "#ffcc80"
                    },
                    {
                        "name": "deep_orange_200",
                        "color": "#ffab91"
                    },
                    {
                        "name": "brown_200",
                        "color": "#bcaaa4"
                    },
                    {
                        "name": "grey_200",
                        "color": "#eeeeee"
                    },
                    {
                        "name": "blue_grey_200",
                        "color": "#b0bec5"
                    }
                ],
                "300": [
                    {
                        "name": "red_300",
                        "color": "#f36c60"
                    },
                    {
                        "name": "pink_300",
                        "color": "#f06292"
                    },
                    {
                        "name": "purple_300",
                        "color": "#ba68c8"
                    },
                    {
                        "name": "deep_purple_300",
                        "color": "#9575cd"
                    },
                    {
                        "name": "indigo_300",
                        "color": "#7986cb"
                    },
                    {
                        "name": "blue_300",
                        "color": "#91a7ff"
                    },
                    {
                        "name": "light_blue_300",
                        "color": "#4fc3f7"
                    },
                    {
                        "name": "cyan_300",
                        "color": "#4dd0e1"
                    },
                    {
                        "name": "teal_300",
                        "color": "#4db6ac"
                    },
                    {
                        "name": "green_300",
                        "color": "#42bd41"
                    },
                    {
                        "name": "light_green_300",
                        "color": "#aed581"
                    },
                    {
                        "name": "lime_300",
                        "color": "#dce775"
                    },
                    {
                        "name": "yellow_300",
                        "color": "#fff176"
                    },
                    {
                        "name": "orange_300",
                        "color": "#ffb74d"
                    },
                    {
                        "name": "deep_orange_300",
                        "color": "#ff8a65"
                    },
                    {
                        "name": "brown_300",
                        "color": "#a1887f"
                    },
                    {
                        "name": "grey_300",
                        "color": "#e0e0e0"
                    },
                    {
                        "name": "blue_grey_300",
                        "color": "#90a4ae"
                    }
                ],
                "400": [
                    {
                        "name": "red_400",
                        "color": "#e84e40"
                    },
                    {
                        "name": "pink_400",
                        "color": "#ec407a"
                    },
                    {
                        "name": "purple_400",
                        "color": "#ab47bc"
                    },
                    {
                        "name": "deep_purple_400",
                        "color": "#7e57c2"
                    },
                    {
                        "name": "indigo_400",
                        "color": "#5c6bc0"
                    },
                    {
                        "name": "blue_400",
                        "color": "#738ffe"
                    },
                    {
                        "name": "light_blue_400",
                        "color": "#29b6f6"
                    },
                    {
                        "name": "cyan_400",
                        "color": "#26c6da"
                    },
                    {
                        "name": "teal_400",
                        "color": "#26a69a"
                    },
                    {
                        "name": "green_400",
                        "color": "#2baf2b"
                    },
                    {
                        "name": "light_green_400",
                        "color": "#9ccc65"
                    },
                    {
                        "name": "lime_400",
                        "color": "#d4e157"
                    },
                    {
                        "name": "yellow_400",
                        "color": "#ffee58"
                    },
                    {
                        "name": "orange_400",
                        "color": "#ffa726"
                    },
                    {
                        "name": "deep_orange_400",
                        "color": "#ff7043"
                    },
                    {
                        "name": "brown_400",
                        "color": "#8d6e63"
                    },
                    {
                        "name": "grey_400",
                        "color": "#bdbdbd"
                    },
                    {
                        "name": "blue_grey_400",
                        "color": "#78909c"
                    }
                ],
                "500": [
                    {
                        "name": "red_500",
                        "color": "#e51c23"
                    },
                    {
                        "name": "pink_500",
                        "color": "#e91e63"
                    },
                    {
                        "name": "purple_500",
                        "color": "#9c27b0"
                    },
                    {
                        "name": "deep_purple_500",
                        "color": "#673ab7"
                    },
                    {
                        "name": "indigo_500",
                        "color": "#3f51b5"
                    },
                    {
                        "name": "blue_500",
                        "color": "#5677fc"
                    },
                    {
                        "name": "light_blue_500",
                        "color": "#03a9f4"
                    },
                    {
                        "name": "cyan_500",
                        "color": "#00bcd4"
                    },
                    {
                        "name": "teal_500",
                        "color": "#009688"
                    },
                    {
                        "name": "green_500",
                        "color": "#259b24"
                    },
                    {
                        "name": "light_green_500",
                        "color": "#8bc34a"
                    },
                    {
                        "name": "lime_500",
                        "color": "#cddc39"
                    },
                    {
                        "name": "yellow_500",
                        "color": "#ffeb3b"
                    },
                    {
                        "name": "orange_500",
                        "color": "#ff9800"
                    },
                    {
                        "name": "deep_orange_500",
                        "color": "#ff5722"
                    },
                    {
                        "name": "brown_500",
                        "color": "#795548"
                    },
                    {
                        "name": "grey_500",
                        "color": "#9e9e9e"
                    },
                    {
                        "name": "blue_grey_500",
                        "color": "#607d8b"
                    }
                ],
                "600": [
                    {
                        "name": "red_600",
                        "color": "#dd191d"
                    },
                    {
                        "name": "pink_600",
                        "color": "#d81b60"
                    },
                    {
                        "name": "purple_600",
                        "color": "#8e24aa"
                    },
                    {
                        "name": "deep_purple_600",
                        "color": "#5e35b1"
                    },
                    {
                        "name": "indigo_600",
                        "color": "#3949ab"
                    },
                    {
                        "name": "blue_600",
                        "color": "#4e6cef"
                    },
                    {
                        "name": "light_blue_600",
                        "color": "#039be5"
                    },
                    {
                        "name": "cyan_600",
                        "color": "#00acc1"
                    },
                    {
                        "name": "teal_600",
                        "color": "#00897b"
                    },
                    {
                        "name": "green_600",
                        "color": "#0a8f08"
                    },
                    {
                        "name": "light_green_600",
                        "color": "#7cb342"
                    },
                    {
                        "name": "lime_600",
                        "color": "#c0ca33"
                    },
                    {
                        "name": "yellow_600",
                        "color": "#fdd835"
                    },
                    {
                        "name": "orange_600",
                        "color": "#fb8c00"
                    },
                    {
                        "name": "deep_orange_600",
                        "color": "#f4511e"
                    },
                    {
                        "name": "brown_600",
                        "color": "#6d4c41"
                    },
                    {
                        "name": "grey_600",
                        "color": "#757575"
                    },
                    {
                        "name": "blue_grey_600",
                        "color": "#546e7a"
                    }
                ],
                "700": [
                    {
                        "name": "red_700",
                        "color": "#d01716"
                    },
                    {
                        "name": "pink_700",
                        "color": "#c2185b"
                    },
                    {
                        "name": "purple_700",
                        "color": "#7b1fa2"
                    },
                    {
                        "name": "deep_purple_700",
                        "color": "#512da8"
                    },
                    {
                        "name": "indigo_700",
                        "color": "#303f9f"
                    },
                    {
                        "name": "blue_700",
                        "color": "#455ede"
                    },
                    {
                        "name": "light_blue_700",
                        "color": "#0288d1"
                    },
                    {
                        "name": "cyan_700",
                        "color": "#0097a7"
                    },
                    {
                        "name": "teal_700",
                        "color": "#00796b"
                    },
                    {
                        "name": "green_700",
                        "color": "#0a7e07"
                    },
                    {
                        "name": "light_green_700",
                        "color": "#689f38"
                    },
                    {
                        "name": "lime_700",
                        "color": "#afb42b"
                    },
                    {
                        "name": "yellow_700",
                        "color": "#fbc02d"
                    },
                    {
                        "name": "orange_700",
                        "color": "#f57c00"
                    },
                    {
                        "name": "deep_orange_700",
                        "color": "#e64a19"
                    },
                    {
                        "name": "brown_700",
                        "color": "#5d4037"
                    },
                    {
                        "name": "grey_700",
                        "color": "#616161"
                    },
                    {
                        "name": "blue_grey_700",
                        "color": "#455a64"
                    }
                ],
                "800": [
                    {
                        "name": "red_800",
                        "color": "#c41411"
                    },
                    {
                        "name": "pink_800",
                        "color": "#ad1457"
                    },
                    {
                        "name": "purple_800",
                        "color": "#6a1b9a"
                    },
                    {
                        "name": "deep_purple_800",
                        "color": "#4527a0"
                    },
                    {
                        "name": "indigo_800",
                        "color": "#283593"
                    },
                    {
                        "name": "blue_800",
                        "color": "#3b50ce"
                    },
                    {
                        "name": "light_blue_800",
                        "color": "#0277bd"
                    },
                    {
                        "name": "cyan_800",
                        "color": "#00838f"
                    },
                    {
                        "name": "teal_800",
                        "color": "#00695c"
                    },
                    {
                        "name": "green_800",
                        "color": "#056f00"
                    },
                    {
                        "name": "light_green_800",
                        "color": "#558b2f"
                    },
                    {
                        "name": "lime_800",
                        "color": "#9e9d24"
                    },
                    {
                        "name": "yellow_800",
                        "color": "#f9a825"
                    },
                    {
                        "name": "orange_800",
                        "color": "#ef6c00"
                    },
                    {
                        "name": "deep_orange_800",
                        "color": "#d84315"
                    },
                    {
                        "name": "brown_800",
                        "color": "#4e342e"
                    },
                    {
                        "name": "grey_800",
                        "color": "#424242"
                    },
                    {
                        "name": "blue_grey_800",
                        "color": "#37474f"
                    }
                ],
                "900": [
                    {
                        "name": "red_900",
                        "color": "#b0120a"
                    },
                    {
                        "name": "pink_900",
                        "color": "#880e4f"
                    },
                    {
                        "name": "purple_900",
                        "color": "#4a148c"
                    },
                    {
                        "name": "deep_purple_900",
                        "color": "#311b92"
                    },
                    {
                        "name": "indigo_900",
                        "color": "#1a237e"
                    },
                    {
                        "name": "blue_900",
                        "color": "#2a36b1"
                    },
                    {
                        "name": "light_blue_900",
                        "color": "#01579b"
                    },
                    {
                        "name": "cyan_900",
                        "color": "#006064"
                    },
                    {
                        "name": "teal_900",
                        "color": "#004d40"
                    },
                    {
                        "name": "green_900",
                        "color": "#0d5302"
                    },
                    {
                        "name": "light_green_900",
                        "color": "#33691e"
                    },
                    {
                        "name": "lime_900",
                        "color": "#827717"
                    },
                    {
                        "name": "yellow_900",
                        "color": "#f57f17"
                    },
                    {
                        "name": "orange_900",
                        "color": "#e65100"
                    },
                    {
                        "name": "deep_orange_900",
                        "color": "#bf360c"
                    },
                    {
                        "name": "brown_900",
                        "color": "#3e2723"
                    },
                    {
                        "name": "grey_900",
                        "color": "#212121"
                    },
                    {
                        "name": "blue_grey_900",
                        "color": "#263238"
                    }
                ],
                "A100": [
                    {
                        "name": "red_A100",
                        "color": "#ff7997"
                    },
                    {
                        "name": "pink_A100",
                        "color": "#ff80ab"
                    },
                    {
                        "name": "purple_A100",
                        "color": "#ea80fc"
                    },
                    {
                        "name": "deep_purple_A100",
                        "color": "#b388ff"
                    },
                    {
                        "name": "indigo_A100",
                        "color": "#8c9eff"
                    },
                    {
                        "name": "blue_A100",
                        "color": "#a6baff"
                    },
                    {
                        "name": "light_blue_A100",
                        "color": "#80d8ff"
                    },
                    {
                        "name": "cyan_A100",
                        "color": "#84ffff"
                    },
                    {
                        "name": "teal_A100",
                        "color": "#a7ffeb"
                    },
                    {
                        "name": "green_A100",
                        "color": "#a2f78d"
                    },
                    {
                        "name": "light_green_A100",
                        "color": "#ccff90"
                    },
                    {
                        "name": "lime_A100",
                        "color": "#f4ff81"
                    },
                    {
                        "name": "yellow_A100",
                        "color": "#ffff8d"
                    },
                    {
                        "name": "orange_A100",
                        "color": "#ffd180"
                    },
                    {
                        "name": "deep_orange_A100",
                        "color": "#ff9e80"
                    }
                ],
                "A200": [
                    {
                        "name": "red_A200",
                        "color": "#ff5177"
                    },
                    {
                        "name": "pink_A200",
                        "color": "#ff4081"
                    },
                    {
                        "name": "purple_A200",
                        "color": "#e040fb"
                    },
                    {
                        "name": "deep_purple_A200",
                        "color": "#7c4dff"
                    },
                    {
                        "name": "indigo_A200",
                        "color": "#536dfe"
                    },
                    {
                        "name": "blue_A200",
                        "color": "#6889ff"
                    },
                    {
                        "name": "light_blue_A200",
                        "color": "#40c4ff"
                    },
                    {
                        "name": "cyan_A200",
                        "color": "#18ffff"
                    },
                    {
                        "name": "teal_A200",
                        "color": "#64ffda"
                    },
                    {
                        "name": "green_A200",
                        "color": "#5af158"
                    },
                    {
                        "name": "light_green_A200",
                        "color": "#b2ff59"
                    },
                    {
                        "name": "lime_A200",
                        "color": "#eeff41"
                    },
                    {
                        "name": "yellow_A200",
                        "color": "#ffff00"
                    },
                    {
                        "name": "orange_A200",
                        "color": "#ffab40"
                    },
                    {
                        "name": "deep_orange_A200",
                        "color": "#ff6e40"
                    }
                ],
                "A400": [
                    {
                        "name": "red_A400",
                        "color": "#ff2d6f"
                    },
                    {
                        "name": "pink_A400",
                        "color": "#f50057"
                    },
                    {
                        "name": "purple_A400",
                        "color": "#d500f9"
                    },
                    {
                        "name": "deep_purple_A400",
                        "color": "#651fff"
                    },
                    {
                        "name": "indigo_A400",
                        "color": "#3d5afe"
                    },
                    {
                        "name": "blue_A400",
                        "color": "#4d73ff"
                    },
                    {
                        "name": "light_blue_A400",
                        "color": "#00b0ff"
                    },
                    {
                        "name": "cyan_A400",
                        "color": "#00e5ff"
                    },
                    {
                        "name": "teal_A400",
                        "color": "#1de9b6"
                    },
                    {
                        "name": "green_A400",
                        "color": "#14e715"
                    },
                    {
                        "name": "light_green_A400",
                        "color": "#76ff03"
                    },
                    {
                        "name": "lime_A400",
                        "color": "#c6ff00"
                    },
                    {
                        "name": "yellow_A400",
                        "color": "#ffea00"
                    },
                    {
                        "name": "orange_A400",
                        "color": "#ff9100"
                    },
                    {
                        "name": "deep_orange_A400",
                        "color": "#ff3d00"
                    }
                ],
                "A700": [
                    {
                        "name": "red_A700",
                        "color": "#e00032"
                    },
                    {
                        "name": "pink_A700",
                        "color": "#c51162"
                    },
                    {
                        "name": "purple_A700",
                        "color": "#aa00ff"
                    },
                    {
                        "name": "deep_purple_A700",
                        "color": "#6200ea"
                    },
                    {
                        "name": "indigo_A700",
                        "color": "#304ffe"
                    },
                    {
                        "name": "blue_A700",
                        "color": "#4d69ff"
                    },
                    {
                        "name": "light_blue_A700",
                        "color": "#0091ea"
                    },
                    {
                        "name": "cyan_A700",
                        "color": "#00b8d4"
                    },
                    {
                        "name": "teal_A700",
                        "color": "#00bfa5"
                    },
                    {
                        "name": "green_A700",
                        "color": "#12c700"
                    },
                    {
                        "name": "light_green_A700",
                        "color": "#64dd17"
                    },
                    {
                        "name": "lime_A700",
                        "color": "#aeea00"
                    },
                    {
                        "name": "yellow_A700",
                        "color": "#ffd600"
                    },
                    {
                        "name": "orange_A700",
                        "color": "#ff6d00"
                    },
                    {
                        "name": "deep_orange_A700",
                        "color": "#dd2c00"
                    }
                ]
            }

        this.type = INITIAL_COLOR_GROUP;
        this.color = UNDEFINED_COLOR;
    }

    next() {
        var group = Object.keys(this.colors)[this.type]

        if (!group) {
            this.type = INITIAL_COLOR_GROUP;
            this.color = INITIAL_COLOR;
            return this.next();
        }

        if(this.colors[group].length <= this.color + 1) {
            this.type = this.type + 1
            return this.next();
        }

        this.color = this.color + 1;
        var result = this.colors[group][this.color]

        return result
    }
}