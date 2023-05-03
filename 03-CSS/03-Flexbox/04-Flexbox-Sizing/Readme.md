## Flexbox sizing (FLexbox shrinking and growing)
- In Flexbox, the container is responsible for distributing available space among its child items. If the total size of the child items exceeds the size of the container, the items will shrink to fit within the available space.
- In Flexbox, child items within a container can be sized using flexible sizing, which allows them to grow and shrink to fit within the available space.
- The flexible sizing behavior of child items is controlled by the flex-grow and flex-shrink properties.
---

- Lets us have a webpage with 4 paragraph, all of them will be covering full width of viewport as they are block elements
- When they are put inside a container of flexbox, sizes of all p becomes according to their content inside the container
![image](https://user-images.githubusercontent.com/125631878/235948055-a25fda9c-709a-4129-9280-f7ad129493c4.png)
- If we shrink the window or viewport, then these p blocks also get shrinks
- To customize each items inside a flexbox, we need to understand the algorithm (priority list )that helps in determining 
![image](https://user-images.githubusercontent.com/125631878/235947792-a8a5e0da-280a-42f4-951a-60e6765d3d69.png)
- Flexbox first look if there is max / min width set, then flex-basis, then width, then content width
- When we shrink the size of window then items shrinks automatically to minimum content width (here max size word in sentence)  
![image](https://user-images.githubusercontent.com/125631878/235954729-2c90f394-d591-4a02-be19-d0ea4e1188a5.png)
- Max-width: It looks at longest possible line of text Or determines Maxmimum length items can grow to
- Min-width : It looks at longest word Or determines minimum size items can shrink to
- While shrinking the window, items shrinks to min width
- If item has both width and flex-basis set, then width will be ignored and only look at more important property i.e. flex-basis
![image](https://user-images.githubusercontent.com/125631878/235957979-99725640-c097-4215-8cf7-876149fe77ad.png)

---

- If flex item has max-width `<` flex-basis, then item will set to max-width
- If flex item has flex-basis `<` max-width, then item will set first set to flex-basis if item content is `<=` flex-basis  but if item content is `> flex-basis <= or` content is ` > max-width` then item will set to max-width (as max-width is maximum length item content can go)
- If min-width `>` flex-basis, then item set to min-width

