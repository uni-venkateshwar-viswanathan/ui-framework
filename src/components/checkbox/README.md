# uniphore-checkbox

## How to use
```
<uniphore-checkbox :checked="true"
                   :disabled="true"
                   @uniphore-checkbox-click="onCheckboxClick"
                   label="Checkbox #1"/>
```

```
<uniphore-checkbox :checked="true"
                   :indeterminate="true"
                   :disabled="false"
                   @uniphore-checkbox-click="onCheckboxClick"
                   label="Checkbox #2"/>
```

``` 
<uniphore-checkbox :checked="true"
                   :disabled="false"
                   checkmarkColor="white"
                   checkboxBackgroundColor="black"
                   @uniphore-checkbox-click="onCheckboxClick"
                   label="Checkbox #3"/>
```

``` 
<uniphore-checkbox :checked="true"
                   checkboxSize="medium"
                   @uniphore-checkbox-click="onCheckboxClick"
                   label="Checkbox #14"/>
```

## Events
```
@uniphore-checkbox-click - changing checkbox value callback event
```

## Properties
```
checked - boolean - default: false - checkbox value
```
```
label - string - default: "" - checkbox label text
```
```
disabled - boolean - default: false - disable checkbox
```
```
indeterminate - boolean - default: false - show indeterminate state
```
```
indeterminateIcon - string - default: "minus" - indeterminate icon name
```
```
checkedIcon - string - default: "checkmark" - checked icon name
```
```
labelSize - string - default: 14px - checkbox label text font size
```
```
checkboxBackgroundColor - string - default: transparent - checkbox background color
```
```
checkboxColor - string - default: black - checkbox border color
```
```
checkmarkColor - string - default: black - checkbox checked icon color
```
```
checkboxSize - string - default: small - checkbox sizes [small, medium]
```