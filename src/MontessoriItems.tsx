import { ITrayDynamicItemList, ITrayDynamicToolbarItems, NOT_CONSTRUCTABLE, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { itemsArrows, toolbarArrows } from './items/arrows';
import { itemsEvenOdd, toolbarEvenOdd } from './items/evenOdd';
import { itemsFractions, toolbarFractions } from './items/fractions';
import { itemsHundredBoard, toolbarHundredBoard } from './items/hundredBoard';
import { itemsMarkGame, toolbarMarkGame } from './items/markGame';
import { itemsNumberCards, toolbarNumberCards } from './items/numberCards';
import { itemsPearls, toolbarPearls } from './items/pearls';
import { itemsRedBlueBars, toolbarRedBlueBars } from './items/redBlueBars';
import { itemsSeguinBoard, toolbarSeguinBoard } from './items/seguinBoard';
import { itemsStripSum, toolbarStripSum } from './items/stripSum';
import arrows from '../assets/tray/categories/arrows.svg';
import evenOdd from '../assets/tray/categories/evenOdd.svg';
import fractions from '../assets/tray/categories/fractions.svg';
import hundredTable from '../assets/tray/categories/hundredTable.svg';
import markGame from '../assets/tray/categories/markGame.svg';
import numberCards from '../assets/tray/categories/numberCards.svg';
import pearls from '../assets/tray/categories/pearls.svg';
import redBlueBars from '../assets/tray/categories/redBlueBars.svg';
import seguinTable from '../assets/tray/categories/seguinTable.svg';
import stripSum from '../assets/tray/categories/stripSum.svg';

export class MontessoriItemsGenerator {
    public static readonly [NOT_CONSTRUCTABLE] = true;

    private constructor() {
        throw new Error(`MontessoriItemsGenerator is a static class which is not constructable.`);
    }

    static privateItems: ITrayDynamicItemList;
    static privateToolbar: ITrayDynamicToolbarItems;

    public static items(): ITrayDynamicItemList {
        if (!this.privateItems) {
            this.privateItems = MontessoriItemsGenerator.createItems();
        }

        return this.privateItems;
    }

    public static toolbar(): ITrayDynamicToolbarItems {
        if (!this.privateToolbar) {
            this.privateToolbar = MontessoriItemsGenerator.createToolbar();
        }

        return this.privateToolbar;
    }

    private static createItems(): ITrayDynamicItemList {
        return {
            ...itemsRedBlueBars(),
            ...itemsPearls(),
            ...itemsNumberCards(),
            ...itemsEvenOdd(),
            ...itemsStripSum(),
            ...itemsHundredBoard(),
            ...itemsSeguinBoard(),
            ...itemsFractions(),
            ...itemsMarkGame(),
            ...itemsArrows(),
        };
    }

    private static createToolbar(): ITrayDynamicToolbarItems {
        return [
            {
                title: <Translate name={`Montessori / red blue bars`}>??erveno-modr?? ty??e</Translate>,
                icon: redBlueBars,
                scale: 0.5,
                items: toolbarRedBlueBars(),
            },
            {
                title: <Translate name={`Montessori / pearls`}>Perlov?? materi??l</Translate>,
                icon: pearls,
                scale: 0.6,
                items: toolbarPearls(),
            },
            {
                title: <Translate name={`Montessori / arrows`}>??ipky k perlov??mu materi??lu</Translate>,
                icon: arrows,
                scale: 0.6,
                items: toolbarArrows(),
            },
            {
                title: <Translate name={`Montessori / number cards`}>Karty s ????sly</Translate>,
                icon: numberCards,
                scale: 0.5,
                items: toolbarNumberCards(),
            },
            {
                title: <Translate name={`Montessori / even odd`}>Sud?? a lich??</Translate>,
                icon: evenOdd,
                scale: 0.9,
                items: toolbarEvenOdd(),
            },
            {
                title: <Translate name={`Montessori / strip sum`}>S????tac?? prou??kov?? tabulka</Translate>,
                icon: stripSum,
                scale: 0.5,
                items: toolbarStripSum(),
            },
            {
                title: <Translate name={`Montessori / hundred board`}>Stovkov?? tabulka</Translate>,
                icon: hundredTable,
                scale: 0.6,
                items: toolbarHundredBoard(),
            },
            {
                title: <Translate name={`Montessori / seguin board`}>Seguinova tabulka</Translate>,
                icon: seguinTable,
                scale: 0.5,
                items: toolbarSeguinBoard(),
            },
            {
                title: <Translate name={`Montessori / mark game`}>Zn??mkov?? hra</Translate>,
                icon: markGame,
                scale: 0.9,
                items: toolbarMarkGame(),
            } /*
            {
                name: <Translate name={`Montessori / abacus`}>Po????tadlo</Translate>,
                icon: abacus,
                scale: 1,
                items: [],
            },*/,
            {
                title: <Translate name={`Montessori / fractions`}>Zlomky</Translate>,
                icon: fractions,
                scale: 0.35,
                items: toolbarFractions(),
            },
        ];
    }
}

/**
 * TODO: Make translations inside this repository
 */
