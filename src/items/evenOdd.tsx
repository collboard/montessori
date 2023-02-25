import {
  ITrayDynamicItemList,
  ITrayDynamicToolbarGroup, Translate
} from '@collboard/modules-sdk';
import React from 'react';
import { montessoriColors } from '../MontessoriDefaultColors';

function generateNumbers(min: number, max: number) {
    const result: ITrayDynamicItemList = {};

    for (let i = min; i <= max; i++) {
        result['evenOddNumber' + i] = {
            content: (
                <text
                    x="0"
                    y="0"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '80px',
                        textAnchor: 'middle',
                        lineHeight: '80px',
                    }}
                >
                    {i}
                </text>
            ),
            defaultColor: montessoriColors.red,
        };
    }

    return result;
}

export function itemsEvenOdd(): ITrayDynamicItemList {
    return {
        ...generateNumbers(1, 10),
        evenOddToken: {
            content: <circle r={15} cx={0} cy={0} />,
            defaultColor: montessoriColors.red,
        },
    };
}

export function toolbarEvenOdd(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / even odd / even odd`}>Sudá a lichá</Translate>,
            itemIds: Object.keys(generateNumbers(1, 10)),
            scale: 0.5,
        },
        { title: <Translate name={`Montessori / even odd / tokens`}>Žetonky</Translate>, itemIds: ['evenOddToken'] },
    ];
}
