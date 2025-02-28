import {useFilter} from "../../../src/custom_hooks/use-filter";

export function FilterHookDemo() {
    let unfilteredArray = ['hey','hi','how are you','im fine','welcome','thanks'];
    let filteredArray = useFilter(unfilteredArray, 'hi');
    return (
        <div>
            <h3>{filteredArray}</h3>
        </div>
    );
}