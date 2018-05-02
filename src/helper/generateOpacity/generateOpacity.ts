/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { hexToRgb } from '../hexToRgb';

export function generateOpacity(color: string, opacity: string|number) {
    const rgbMatch = /rgba?\((\d+),\s?(\d+),\s?(\d+)(?:,\s?(\d?(?:\.\d)?))?\)/.exec(color);
    const buffer = {
        a: 0,
        b: 0,
        g: 0,
        r: 0,
    };

    if (rgbMatch && rgbMatch.length > 4) {
        [buffer.r, buffer.g, buffer.b, buffer.a] = [
            parseInt(rgbMatch[1], 10),
            parseInt(rgbMatch[2], 10),
            parseInt(rgbMatch[3], 10),
            rgbMatch[4] ? parseFloat(rgbMatch[4]) : buffer.a,
        ];
    } else {
        const hexMatch = hexToRgb(color);
        if (hexMatch) {
            buffer.r = hexMatch.r;
            buffer.g = hexMatch.g;
            buffer.b = hexMatch.b;
        }
    }

    try {
        buffer.a = parseFloat(opacity.toString());
    } catch (e) {
        buffer.a = 0;
    }

    return `rgba(${buffer.r}, ${buffer.g}, ${buffer.b}, ${buffer.a})`;
}
