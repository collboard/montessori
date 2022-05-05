import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 60;
const HEIGHT = 20;

function generateRedBlueBars(minLength: number, maxLength: number, colors: boolean) {
    const result: ITrayDynamicItemList = {};

    for (let length = minLength; length <= maxLength; length++) {
        const result2: JSX.Element[] = [];
        for (let x = 0; x < length; x++) {
            result2.push(
                <rect
                    width={WIDTH}
                    height={HEIGHT}
                    x={WIDTH * x}
                    y={0}
                    style={{ stroke: 'none', fill: x % 2 === 0 || !colors ? undefined : montessoriColors.blue }}
                    key={x}
                />,
            );
        }
        result2.push(<rect width={WIDTH * length} height={HEIGHT} x={0} y={0} style={{ fill: 'none' }} key={-1} />);

        result['redBlueBar' + (colors ? '' : 'White') + length] = {
            content: <g>{result2}</g>,
            defaultColor: colors ? montessoriColors.red : montessoriColors.white,
        };
    }

    return result;
}

function generateNumbers(min: number, max: number) {
    const result: ITrayDynamicItemList = {};

    for (let i = min; i <= max; i++) {
        result['redBlueBarNumber' + i] = {
            content: (
                <g>
                    <text
                        x="0"
                        y="0"
                        style={{
                            stroke: 'none',
                            strokeWidth: '0',
                            fontWeight: 'bold',
                            fontSize: '40px',
                            textAnchor: 'middle',
                            lineHeight: '40px',
                        }}
                    >
                        {i}
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.red,
        };
    }

    return result;
}

export function itemsRedBlueBars(): ITrayDynamicItemList {
    return {
        ...generateRedBlueBars(1, 10, true),
        ...generateRedBlueBars(1, 10, false),
        ...generateNumbers(1, 10),
    };
}

export function toolbarRedBlueBars(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / red blue bars / number cards`}>Kartičky s čísly</Translate>,
            itemIds: Object.keys(generateNumbers(1, 10)),
        },
        {
            title: <Translate name={`Montessori / red blue bars / red blue bars`}>Červeno-modré tyče</Translate>,
            itemIds: Object.keys(generateRedBlueBars(1, 10, true)),
        },
        {
            title: <Translate name={`Montessori / red blue bars / unfilled bars`}>Nevybarvené tyče</Translate>,
            itemIds: Object.keys(generateRedBlueBars(1, 10, false)),
        },
    ];
}
