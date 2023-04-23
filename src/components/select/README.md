# uniphore-select

## How to use
```
const options2 = [
      {
        label: "Option 1",
        id: "1",
        color: "#33AF3E"
      },
      {
        label: "Option 2",
        id: "2",
        color: "#F6C700"
      },
      {
        label: "Option 3",
        id: "3",
        color: "#F36D6D"
      }
    ];
  
<uniphore-select :options="options"
                 :filterable="true"
                 :selected="selectedOption"/>
```

```
const options = [
      {
        label: "Option 1",
        id: "1",
        icon: "icon-1"
      },
      {
        label: "Option 2",
        id: "2",
        icon: "icon-2"
      },
      {
        label: "Option 3",
        id: "3",
        icon: "icon-3"
      }
    ];
    
<uniphore-select :options="options"
                 :multiple="true"
                 :selected="selectedOption"
                 @on-select="onSelect"/>
```

## Properties
```
attribute: multiple
type: Boolean
default: false

define a mutli select dropdown
```
```
attribute: filterable
type: Boolean
default: false

adds search input field to the dropdown popover,
search uses #attribute identifierAttribute.
```
```
attribute: identifierAttribute
type: String
default: id

defines the id attribute of the item in the list
```

```
attribute: labelAttribute
type: String
default: label

defines the label attribute of the item in the list
```

```
attribute: maximum
type: Number
default: null

works with #attribute mutliple = true 
defines how many tags to show in the toggle and 
to overflow the rest of the tags.
```

``` 
attribute: popoverMaxHeight
type: String
default: 200px

defines the maximum height of the dropdown
```

``` 
attribute: placeholder
type: String
default: Select

defines the placeholder label of the toggle when there
is\are no option\s selected
```

``` 
attribute: searchPlaceholder
type: String
default: Search

defines the placeholder label of the search input field
```

``` 
attribute: toggleBackgroundColor
type: String
default: white
```

``` 
attribute: popoverBackgroundColor
type: String
default: white
```

``` 
attribute: toggleColor
type: String
default: #6D6F79
```

``` 
attribute: popoverColor
type: String
default: #6D6F79
```

``` 
attribute: toggleBorderColor
type: String
default: #ABAEBC
```

``` 
attribute: popoverBorderColor
type: String
default: #ABAEBC
```

``` 
attribute: options
type: Array
default: []

defines array list of options
```

``` 
attribute: selected
type: Array, Object

defines the select option\s objects
```

``` 
attribute: selectedIcon
type: String
default: checkmark

defines the icon of selected option\s
```

``` 
attribute: emptyListPlaceholder
type: String
default: There are no data

defines the label when the list of options is empty
```
