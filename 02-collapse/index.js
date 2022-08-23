const collapsibleButton = document.querySelector(".collapsible__button");
const collapsibleContent = document.querySelector(".collapsible__content");

collapsibleContent.style.transformOrigin = "top left";

const collapsibleContentAnimation = collapsibleContent.animate(
  { transform: ["scale(0)", "scale(1)"] },
  {
    duration: 300,
    fill: "both",
    easing: "ease-in-out",
  }
);

const collapsibleActionVisible = document.querySelector(
  ".collapsible__action--visible"
);
const collapsibleActionHidden = document.querySelector(
  ".collapsible__action--hidden"
);

collapsibleActionVisible.style.display = "inline";
collapsibleActionHidden.style.display = "none";

let isOpen = true;

const onCollapsibleButtonClick = () => {
  collapsibleContentAnimation.play();
  collapsibleContentAnimation.reverse();

  if (isOpen) {
    collapsibleActionVisible.style.display = "none";
    collapsibleActionHidden.style.display = "inline";
    isOpen = false;

    return;
  }

  collapsibleActionVisible.style.display = "inline";
  collapsibleActionHidden.style.display = "none";
  isOpen = true;
};

collapsibleButton.addEventListener("click", onCollapsibleButtonClick);
