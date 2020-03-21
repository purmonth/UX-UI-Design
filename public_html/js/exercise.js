// Step 3 code goes here
/* Step 3:
 * google `css nth-child` for the special css selector
 * google `js ternary operator` for the `... ? ... : ...` syntax
 * `this` points to the event trigger in jQuery
 * all css properties can be changed "dynamically" with `animate()` of jQuery
 */
let display = true
$('.card:nth-child(1)').click(function(){
  // Step 3: replace [alternative style] to an appropriate value
  const style = display
  ? { opacity: 0.5 }
  : { opacity: 1 }
  $(this).animate(style, 400)
  display = !display
})

(a>b)?x=1:x=2

// Step 4 code goes here

/* Step 4:
 * a practical way of step 3
 * (hint) you may need to check `./exercise.css` for the [css class]
 * use browser developer console to see the class change of the card
 */
$('.card:nth-child(2)').click(function(){
    $(this).toggleClass('hidden', 400) // Step 4: replace [css class] with an appropriate value
  })

// Step 5 code goes here

/* Step 5:
 * repeat the transition twice, otherwise you can not click it again
 * see https://semantic-ui.com/modules/transition.html for more effects
 */
$('.card:nth-child(3)').click(function(){
    $(this).transition('fly up') // Step 5: replace [effect] with an appropriate value
  })

