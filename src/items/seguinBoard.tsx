import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 60;
const HEIGHT_CARD = 70;
const HEIGHT_BOARD = 80;

const TEXT_STYLE: React.CSSProperties = {
    stroke: 'none',
    strokeWidth: '0',
    fontWeight: 'bold',
    fontSize: '35px',
    textAnchor: 'middle',
    lineHeight: '35px',
    dominantBaseline: 'middle',
    fill: montessoriColors.black,
};

function generateCards() {
    const result: ITrayDynamicItemList = {};

    for (let i = 1; i <= 9; i++) {
        result['seguinBoardNumber' + i] = {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH} height={HEIGHT_CARD} />,
                    <text x={WIDTH / 2} y={HEIGHT_CARD / 2 + 5} style={TEXT_STYLE}>
                        {i}
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.white,
        };
    }

    return result;
}

function generateBoard(numbers: number[]) {
    const result: JSX.Element[] = [];

    numbers.forEach((num, y) => {
        result.push(
            <line x1={0} y1={HEIGHT_BOARD * y} x2={2 * WIDTH} y2={HEIGHT_BOARD * y} key={y + '_1'} />,
            <rect
                x={0}
                y={HEIGHT_BOARD * y + (HEIGHT_BOARD - HEIGHT_CARD) / 2}
                width={2 * WIDTH}
                height={HEIGHT_CARD}
                style={{ stroke: 'none' }}
                key={y + '_2'}
            />,
        );
        if (num > 0) {
            result.push(
                <text x={WIDTH / 2} y={HEIGHT_BOARD / 2 + 5 + HEIGHT_BOARD * y} style={TEXT_STYLE} key={y + '_3'}>
                    {num}
                </text>,
                <text x={WIDTH * 1.5} y={HEIGHT_BOARD / 2 + 5 + HEIGHT_BOARD * y} style={TEXT_STYLE} key={y + '_4'}>
                    {0}
                </text>,
            );
        }
    });
    result.push(
        <line x1={0} y1={HEIGHT_BOARD * numbers.length} x2={2 * WIDTH} y2={HEIGHT_BOARD * numbers.length} key={-1} />,
    );
    return <g>{result}</g>;
}

function generateBoards(): ITrayDynamicItemList {
    return {
        seguinBoardFiveOnes: {
            content: generateBoard([1, 1, 1, 1, 1]),
            defaultColor: montessoriColors.white,
        },
        seguinBoardFourOnes: {
            content: generateBoard([1, 1, 1, 1, 0]),
            defaultColor: montessoriColors.white,
        },
        seguinBoardLower: {
            content: generateBoard([1, 2, 3, 4, 5]),
            defaultColor: montessoriColors.white,
        },
        seguinBoardUpper: {
            content: generateBoard([6, 7, 8, 9, 0]),
            defaultColor: montessoriColors.white,
        },
    };
}

export function itemsSeguinBoard(): ITrayDynamicItemList {
    return {
        ...generateBoards(),
        ...generateCards(),
    };
}

export function toolbarSeguinBoard(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / seguin board / seguin board`}>Seguinova tabulka</Translate>,
            itemIds: Object.keys(generateBoards()),
            scale: 0.25,
        },
        {
            title: <Translate name={`Montessori / seguin board / cards`}>Karty</Translate>,
            itemIds: Object.keys(generateCards()),
        },
    ];
}
