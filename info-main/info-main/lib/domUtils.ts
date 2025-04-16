export const slideToSection = (section: string, offset: number = 100): void => {
  const sectionElement = document.getElementById(section)
  if (sectionElement) {
    const sectionRect = sectionElement.getBoundingClientRect()
    const absoluteSectionTop = window.scrollY + sectionRect.top - offset

    window.scrollTo({
      top: absoluteSectionTop,
      behavior: 'smooth',
    })
  }
}
