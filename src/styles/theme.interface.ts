import {
  Palette as PaletteMUI,
  PaletteOptions as PaletteOptionsMUI,
  Theme as ThemeMUI,
  ThemeOptions as ThemeOptionsMUI,
} from "@mui/material/styles";
import { CustomColors } from './customColors'

interface PaletteOptions extends PaletteOptionsMUI, CustomColors {}
interface Palette extends PaletteMUI, CustomColors {}

export interface Theme extends ThemeMUI {
  palette: Palette;
}

export interface ThemeOptions extends ThemeOptionsMUI {
  palette: PaletteOptions;
}