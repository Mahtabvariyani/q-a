whats event delegation??
that means if you firing a event listener on a DOM
it not only effect the single dom it self it also effects the whole dom children ...

<ul (if the event listner is here it is actually effecting the whole ul)>
    <li>    
      <a> Something  </a>
    </li>

</ul>


so this happens throw a process of name event bubblings

o that means txactly reverse of the event delegation so that explain (is you add a event on childrent it also bubbles up to parent )

so another question is ("whats the diffrent between the target and current Target??")

the target is what you actually clicked 
but the current target is what is the event listner is attached to 