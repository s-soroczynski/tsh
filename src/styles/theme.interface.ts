import {
  Palette as PaletteMUI,
  PaletteOptions as PaletteOptionsMUI,
  Theme as ThemeMUI,
  ThemeOptions as ThemeOptionsMUI,
} from "@mui/material/styles";
import { CustomColorInterface } from './custom'

interface PaletteOptions extends PaletteOptionsMUI, CustomColorInterface {}
interface Palette extends PaletteMUI, CustomColorInterface {}

export interface Theme extends ThemeMUI {
  palette: Palette;
}

export interface ThemeOptions extends ThemeOptionsMUI {
  palette: PaletteOptions;
}