import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 50;
const HEIGHT = 60;

function generateNumbers(exponent: number, color: string) {
    const result: ITrayDynamicItemList = {};

    for (let i = 1; i <= 9; i++) {
        const result2: JSX.Element[] = [
            <rect key={-1} x={0} y={0} width={WIDTH * (exponent + 1)} height={HEIGHT} style={{ fill: 'white' }} />,
        ];

        for (let e = 0; e <= exponent; e++) {
            result2.push(
                <text
                    x={WIDTH * (e + 0.5)}
                    y={HEIGHT / 2 + 5}
                    style={{
                        stroke: 'none',
                        strokeWidth: '0',
                        fontWeight: 'bold',
                        fontSize: '40px',
                        textAnchor: 'middle',
                        lineHeight: '40px',
                        dominantBaseline: 'middle',
                    }}
                    key={e}
                >
                    {e === 0 ? i : 0}
                </text>,
            );
        }

        result['numberCards' + Math.pow(10, exponent) * i] = {
            content: <g>{result2}</g>,
            defaultColor: color,
        };
    }

    return result;
}

export function itemsNumberCards(): ITrayDynamicItemList {
    return {
        ...generateNumbers(0, montessoriColors.green),
        ...generateNumbers(1, montessoriColors.blue),
        ...generateNumbers(2, montessoriColors.red),
        ...generateNumbers(3, montessoriColors.green),
        ...generateNumbers(4, montessoriColors.blue),
        ...generateNumbers(5, montessoriColors.red),
        ...generateNumbers(6, montessoriColors.green),
    };
}

export function toolbarNumberCards(): ITrayDynamicToolbarGroup {
    return [
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 1 - 9
                </>
            ),
            itemIds: Object.keys(generateNumbers(0, montessoriColors.green)),
        },
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 10 - 90
                </>
            ),
            itemIds: Object.keys(generateNumbers(1, montessoriColors.blue)),
        },
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 100 - 900
                </>
            ),
            itemIds: Object.keys(generateNumbers(2, montessoriColors.red)),
        },
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 1 000 - 9
                    000
                </>
            ),
            itemIds: Object.keys(generateNumbers(3, montessoriColors.green)),
        },
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 10 000 -
                    90 000
                </>
            ),
            itemIds: Object.keys(generateNumbers(4, montessoriColors.blue)),
        },
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 100 000 -
                    900 000
                </>
            ),
            itemIds: Object.keys(generateNumbers(5, montessoriColors.red)),
        },
        {
            title: (
                <>
                    <Translate name={`Montessori / number cards / number cards`}>Kartičky s čísly</Translate> 1 000 000
                    - 9 000 000
                </>
            ),
            itemIds: Object.keys(generateNumbers(6, montessoriColors.green)),
        },
    ];
}
