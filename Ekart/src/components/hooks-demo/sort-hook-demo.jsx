import { useSort } from "../../custom_hooks/use-sort";

export function SortHookDemo() {
    const unsortedArray = ['apple', 'humpy', 'kitty', 'edward', 'pioneer'];
    const sortedArrayAsc = useSort(unsortedArray, false);
    const sortedArrayDsc = useSort(unsortedArray, true);
    return (
       <div>
         <h2>Sorted List</h2>
         <h5>Ascending order</h5>
         <ul>
            {
               sortedArrayAsc.map(item => <li key={item}>{item}</li>)
            }
         </ul>
         <h5>Descending order</h5>
         <ul>
            {
               sortedArrayDsc.map(item => <li key={item}>{item}</li>)
            }
         </ul>
       </div>
    );
}