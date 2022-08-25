// blank

import React, { EffectCallback, useState } from "react";

interface useItemsPerPageProps {
    ref:  React.RefObject<HTMLElement>,
    getItemsPerRow: (w: number, h: number) => number,
    itemHeight: number,
    occupiedHeightAfter?: number,
    minRows?: number,
}


function useItemsPerPage (props: useItemsPerPageProps): [number, EffectCallback] {
    const {
        ref,
        getItemsPerRow,
        itemHeight,
        occupiedHeightAfter = 0,
        minRows = 3,
    } = props;
    const [itemsPerPage, setItemsPerPage] = useState<number>(0);

    const onMount = () => {
        const setNewItemsPerPage = () => {
            if (ref.current) {
                const width = window.innerWidth;
                const height = window.innerHeight;

                const itemsPerRow = getItemsPerRow(width, height);
                const minItemsPerPage = itemsPerRow * minRows;

                const el = ref.current;
                const elOffsetTop = el.offsetTop;

                const itemsSpace = height - elOffsetTop - occupiedHeightAfter;

                const itemsPerPage = Math.floor(itemsSpace / itemHeight) * itemsPerRow;
                const newItemsPerPage = Math.max(minItemsPerPage, itemsPerPage);
                setItemsPerPage(newItemsPerPage);
            }
        }

        setNewItemsPerPage();
        window.addEventListener("resize", setNewItemsPerPage);

        return () => window.removeEventListener("resize", setNewItemsPerPage);
    }

    return [itemsPerPage, onMount];
}

export default useItemsPerPage;