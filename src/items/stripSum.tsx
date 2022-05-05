import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 30;

function generateStrips(minLength: number, maxLength: number, color: string, prefix: string) {
    const result: ITrayDynamicItemList = {};

    for (let length = minLength; length <= maxLength; length++) {
        const result2: JSX.Element[] = [];
        for (let x = 0; x < length; x++) {
            result2.push(<rect key={x} width={WIDTH} height={WIDTH} x={WIDTH * x} y={0} />);
        }

        result2.push(
            <text
                x={WIDTH * length - WIDTH * 0.5}
                y={WIDTH / 2 + 3}
                style={{
                    stroke: 'none',
                    strokeWidth: '0',
                    fill: '#000000',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    textAnchor: 'middle',
                    dominantBaseline: 'middle',
                    lineHeight: '20px',
                }}
                key={-1}
            >
                {length}
            </text>,
        );

        result['stripSum' + prefix + length] = {
            content: <g>{result2}</g>,
            defaultColor: color,
        };
    }

    return result;
}

export function itemsStripSum(): ITrayDynamicItemList {
    return {
        ...generateStrips(1, 9, montessoriColors.blue, 'Blue'),
        ...generateStrips(1, 9, montessoriColors.red, 'Red'),
        stripSumTable: {
            content: (
                <g>
                    {(() => {
                        const COLS = 18;
                        const ROWS = 12;
                        const result: JSX.Element[] = [
                            <rect
                                width={WIDTH * (COLS + 2)}
                                height={WIDTH * (ROWS + 2.5)}
                                x={-WIDTH}
                                y={-1.5 * WIDTH}
                                key={-1}
                            />,
                        ];
                        for (let x = 0; x < COLS; x++) {
                            for (let y = 0; y < ROWS; y++) {
                                result.push(
                                    <rect
                                        key={x + 'x' + y}
                                        width={WIDTH}
                                        height={WIDTH}
                                        x={x * WIDTH}
                                        y={y * WIDTH}
                                    ></rect>,
                                );
                            }
                            result.push(
                                <text
                                    x={x * WIDTH + WIDTH / 2}
                                    y={-WIDTH / 2}
                                    style={{
                                        stroke: 'none',
                                        strokeWidth: '0',
                                        fill: x + 1 <= 10 ? montessoriColors.red : montessoriColors.blue,
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        textAnchor: 'middle',
                                        dominantBaseline: 'middle',
                                        lineHeight: '20px',
                                    }}
                                    key={x}
                                >
                                    {x + 1}
                                </text>,
                            );
                        }
                        return result;
                    })()}
                </g>
            ),
            defaultColor: montessoriColors.white,
        },
    };
}

export function toolbarStripSum(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / strip sum / strip sum board`}>Sčítací proužková tabulka</Translate>,
            itemIds: ['stripSumTable'],
            scale: 0.25,
        },
        {
            title: <Translate name={`Montessori / strip sum / blue strips`}>Modré proužky</Translate>,
            itemIds: Object.keys(generateStrips(1, 9, montessoriColors.blue, 'Blue')),
        },
        {
            title: <Translate name={`Montessori / strip sum / red strips`}>Červené proužky</Translate>,
            itemIds: Object.keys(generateStrips(1, 9, montessoriColors.red, 'Red')),
        },
    ];
}
