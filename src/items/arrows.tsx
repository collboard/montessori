import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { montessoriColors } from '../MontessoriDefaultColors';

const DEFAULT_WIDTH = 20;
const HEIGHT = 100;

function generateArrows(exponent: number, color: string) {
    const result: ITrayDynamicItemList = {};

    for (let i = 1; i <= 9; i++) {
        result['arrows' + Math.pow(10, exponent) * i] = {
            content: (
                <g>
                    <polygon
                        points={[
                            [0, 0],
                            [(DEFAULT_WIDTH * (exponent + 1)) / 2, (-DEFAULT_WIDTH * (exponent + 1)) / 2],
                            [DEFAULT_WIDTH * (exponent + 1), 0],
                            [DEFAULT_WIDTH * (exponent + 1), HEIGHT],
                            [0, HEIGHT],
                        ]
                            .map((tuple) => tuple.join(','))
                            .join(' ')}
                    />
                    <text
                        x={DEFAULT_WIDTH * (exponent + 1) * 0.5}
                        y={HEIGHT / 2 + 5}
                        style={{
                            stroke: 'none',
                            strokeWidth: '0',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            textAnchor: 'middle',
                            lineHeight: '20px',
                            dominantBaseline: 'middle',
                            fill: montessoriColors.black,
                        }}
                    >
                        {numberSpacing(i * 10 ** exponent)}
                    </text>
                </g>
            ),
            defaultColor: color,
        };
    }

    return result;
}

function numberSpacing(sourceNumber: number) {
    let result = '';

    let i = 0;
    for (let num = sourceNumber; num > 0; num = Math.trunc(num / 10)) {
        if (i % 3 === 0) {
            result = ' ' + result;
        }
        result = (num % 10) + result;
        i++;
    }
    return result;
}

export function itemsArrows(): ITrayDynamicItemList {
    return {
        ...generateArrows(0, montessoriColors.green),
        ...generateArrows(1, montessoriColors.blue),
        ...generateArrows(2, montessoriColors.red),
        ...generateArrows(3, montessoriColors.green),
        ...generateArrows(4, montessoriColors.blue),
        ...generateArrows(5, montessoriColors.red),
        ...generateArrows(6, montessoriColors.green),
    };
}

export function toolbarArrows(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / arrows / ones arrows`}>Jednotkové šipky</Translate>,
            itemIds: Object.keys(generateArrows(0, montessoriColors.green)),
        },
        {
            title: <Translate name={`Montessori / arrows / tens arrows`}>Desítkové šipky</Translate>,
            itemIds: Object.keys(generateArrows(1, montessoriColors.blue)),
        },
        {
            title: <Translate name={`Montessori / arrows / hundred arrows`}>Stovkové šipky</Translate>,
            itemIds: Object.keys(generateArrows(2, montessoriColors.red)),
        },
        {
            title: <Translate name={`Montessori / arrows / thusand arrows`}>Tisícové šipky</Translate>,
            itemIds: Object.keys(generateArrows(3, montessoriColors.green)),
        },
        {
            title: <Translate name={`Montessori / arrows / ten thousand arrows`}>Desetitisícové šipky</Translate>,
            itemIds: Object.keys(generateArrows(4, montessoriColors.blue)),
        },
        {
            title: <Translate name={`Montessori / arrows / hundred thousand arrows`}>Stotisícové šipky</Translate>,
            itemIds: Object.keys(generateArrows(5, montessoriColors.red)),
        },
        {
            title: <Translate name={`Montessori / arrows / milion arrows`}>Milionové šipky</Translate>,
            itemIds: Object.keys(generateArrows(6, montessoriColors.green)),
        },
    ];
}
