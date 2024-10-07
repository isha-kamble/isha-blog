import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Isha](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFRUVFxcXGBgYGBgYFxcYHRgXFxgZGB0YHyggHRolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADsQAAEDAgQEBAMHAwMFAQAAAAECAxEAIQQFEjEGQVFhEyJxgZGh0RQyQrHB4fAjUmIVQ/EHFnKSojP/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QALxEAAgIBBAEDBAEDBAMAAAAAAAECAxEEEiExQRMiUQUUMmFxgZGhFSNCUjOxwf/aAAwDAQACEQMRAD8A+ykUkZk9FTBZ6KhDxteoRFXi0G5hbTvi1e5lYO+Ie1TLJg94npV5ZMHvEPSplkwd11W4mD2vtUyXgjqqskOFVC2WkV+9Dgss1Ci4KOSKnBDoPerRD096mSHNQ61WSYOFQ61MomGc1jrVZJg9q71WS8HNXepkrB4KHWryXg7I61OCsHJ71CHPeoWe96ohz3qF5I+9CQ4fWpyQiUGqwy8ogps0LjItNA7za+Qodsg1KJUWl9DV4ZeUVltferSJlEw0vvUwTchyV9605M2CSVd6vJMEtXepkrBIGrIegVCHoqisndNTBeSJHaoQoLnaluWBiicLhqssmDwUe9TLLwjhUamWTB6amSYPTUJg7NTJMHdVXko6FVaZTRw0ISOKFUyEdPeq2l5OxVpFHDVNEOAioiYJWq+CjhUKrgLB7UKnBMESsVXBMMglUVSZbiRUo1WWRIqKT1oXkLg7JqZaJhFgfot4OwkcRReoibDgxFT1CthE4kVPUL2M6l2TUU8g7cF4JouSuDpAoiYO6KmCsnC1U2k3EkNHrRKLJuJeCrrU2srcj3hL7VNsibke8NdTEi90TuhXSpiRWUQ0Knahwy9yPJQonaBUSbZG1gJDfam4F5O6O1TBMkNHahwXk54Y6VMF7jmjtUwXk5ahyiclbjyE3UoD1NDKcI8thKE30ip3HspiVpvtely1VUXhsONFj6Rw45n+9PxqfcVfJaps+CpWasD8Y+tLlrKY+Qlp7X4JDMWT+MUa1NT8lehb8Hjj2f7xU9ev5J6NnwcGNaOxmhd8PBPRmuy9JSbhU0xOL6YDUl2dKB1ouCuSPhiqwi8s54QqYRMs4W6rBMnPDqsEycLNTaXuOFmptJvOKw/eq2F7yP2bvVbCbzhw3epsJvIOYeBM1ThgtTKm8SAZoYzSCcG0FDME9DR+shfpMMKa04FZPbVT4Ie8Sqc0XtJNqq4yyU0TCqPIJILq8kwdCqmSsHddTJeD2upkrB4OVNyL2lf2xEkahal+vDOMl+lLGcEHcyaTusUMtRWu2FGicukLnuJWoOglcdNqU9bD/iPjo5554EuL4sVB8pSZgc6x2ayb4zybK9BHOQB7iDGEGA4fRFKUtTLyxyo0q8ojkmZqU6Q8rw0i+kqvf8Swbj3rXXppvmXRi1ttaSjW+SzijArWqWtSwLK02g+29YLa3ve3kf8ATtRBRxNiJ7A4tUANrIEAGPzoYadz5aNz1NMXwy9GR4yPu2Pxpi0tjXRT1+n8hS+Enymbz0B2NMjoXt57MsvqMd3t6JK4fxBhJSpJtebd71X2XPKAWuiui0ZF4f33U6v/ACJ+IFXKFVXclkXLX5YuxePabVoGIbCibgEifjS5QljMU2V94vgvw+v/AG1lU7BN6zQlNywkVHWqUkmuCTufutK0qS5KfvJNvW9bJOUXhm/0K5x3Joc4TiNtaZC4P9pFx6zTlN4yYZUNPGAzB5yFKI1JOm5IO3Se9DXfLL3FToWMoLTmKTEGZ/lqZ9ysrAHovyXfah1o/WWcAem8HftFM3FbDhxVVvJsIHF1Tmy/TRH7XVb2XsOHF1N7J6ZFWK7VW8nplZdT0qs/oLayYeT0qsr4K2v5GmoVqU0Z8HdVTeiJErUScSuSUCj48A8nIqFnRUIdirwUcWsASVAetA5xXbCUW+kKsZnzSfKk61mwCay26yCWI8s016Sb5lwhUznD0FA3BiTf2JrFC7UOOEzROqlPLLm/F6HVvPL50+uqS/kTOcPHQK/k7rupakxEkXkm3Qb0X27acmi46pR4Rn14J9tpCQIJlSrXBmw9APzpUqcRWEO9eLfIXkrbqF6nYIB5x8I61n2bJ7vgNt2RxE22ExzT7SvDOwuNiPauzpNTXdHMTm36aymWJmXzXhZ/FLUZZQHAEqcGouKQCPKqbRYbU9zysIRNYY/wmGOFAGmbAEgSFQI9q58oypecAJh7OMQud0x1sKKGojL9fyMjFssChOrVI7bVHalLLYeHjojjmdSZQogjpWpSTWYlQltfKEDjr6tSSTE9I9PakylG1bZcGhKua+BbjMo1ocCsQG1EHTawMWkTNZIfT64yzKQqVMl+PJl8FwWXmlIWEF0fjSskxyOmLVvUot/kDKEo9ofow72BwSWgk67gKmSBv7Vl1M1D8fI3TQjKWZGbOLck6ib7zJM1gm885OopJcJG3yHDtutoKmwFCZkfeG01t08tyW5GDUTkm8MJdyBhCVJQNJUZkWv3+lNshXjagI32ZTYCMpdbPkMgCdzy6TSPtucxNH3Sl2LsXnim3NJA1WuZge1YLHYpfs1QrhKOR7gH1ruFpNrjr6U+pWJ5zwZ7IxSxgNS8Da09KcrlnAnY+y4I7CnLkW3g74XYUW0rJBTXYVTTLyRLYjYVReSpCO1Ui2y8N9qvBW4n4xoFNlYLEPelErAXEmp30o3MpI5rPSqyyM7qipuaREilWYoTznsL0p62MXjsZ6EmLcwzd0gpbTH+XX0NJt1VtixHj9jq6a4vMmK2cmxbvmK0gK5GalegnL3SkOetphwkHscMKZ/qWcXEXskd+tanpHWswWWY7tc7fb0jyMPjR90NpE8kpI/OkKGrXCwZXLPYHneR4x/SfGKdI+8hSm4O8eXf1Ip8VfFZk8g7vg7gsJjmiD46nAIGlR1+58oJ+NVO61/ikTnyGLxWLB1KZQscxsT33N6WrtRH84poJPjAU7laMSA4AWlD8J2Pw/OjnTDULeuDZp9bKlbXygHKchU05rUsJg7TuOhrDTpnCe5vBv1OvjbDaomkLrTSdS9LY7x8q60dsY56OJJtsSY3jNkSGgpwjaxA+tZp67HEFkrb8mCz3jF9xwo8NSlASUJsEjqZ/l6X6M71vteEMhKS4iQyfikkQgrSsG6SYA9I3pNml9LmPRqphGf5dn0vhnMi+zLkBQkEgRI69K3aW1SXJn1NeyXt6CUoTP8Acnre/wAaHMVPjoyxbMpxXwg6454jSoB3EkmOkc/3op6fDckdGrVcKLFuVYN7UhaSpOm0/wA5WiuZFybyjbbOGMM3rSW3RCiknmJm/pW6Mq58SZzJRnDlIFc4bY1ao+VX9rW5LkpXzwLm8xcGIdYHhtJaiCozrBEgjt1rdGMY8IU3nkNwuNQ4ryKDignzKSDoB6dPT0pN0EvdHsuLfTCX3tMAiZk2iwpE7XHGURySFma5MwoFxXkP929Mah2zRVdOLSRlMVjSg6UOBTeqPLIUY6gVkmtz74OnHD5a5DsHmMmBYxuZFvzpcofCBwuhzk2KcQCVR4ZNpMknqDVU2Sp76E3wjPhdj9jEBYlJmN+orpV3RsWYmGUHF4ZM0zkEifQVRZH2FQosT6VMkLVYdHSmOuHwBukc8BHSq9OBN8jycOmoq4k3sqxzyGU6lTEgfvQX2RqjuYdUJWSwjJZ/mw1goUdMQAfunvXIvtV8/Zk6unp2x9yAsoeDzsaTv5lA2FthR6enL9yC1HshnP8AQ1bKmmZtPzj42rbvqp4OPOxy7CMBmHiGEggbgwYoqb5Tk1twK4F3EueeEUphSwLq07dIP5+1H93FT2M36TTb02+D2V8U4dxN1lKhaFCDR4zzkK3QWp8LIzezVGmUHxDySki/x2o4xkZZaea7iKxnDjagX0stauWpSljpsL1XpYy93IvOeMB6A6shUpgpFzM9dqwyjZKXfI/MFHolm+MbwzOtxRSJAECVEnYJHU1odTcNsWJjL3coU4vOnPC1BlbZ2BdCJJ5EBJIHqaRqITriiOab4HOHSh5tLigJKYP6gdqbGW+vcwcYYRhcM0mdKEiOgijpdb6KlFmZwXDQbefeGl0YgnWknuSIIG14jsKKE4y7LzjoU5TwQUPuOu6AlROltIOlIsE3NzYdOdDa4SW1BxlJPJtm8pT4Sm0nTIgEcqKFEfTaQqcm3lizI2ntZGIH3bA7A97b1z9PVYrW7OkTHwaBavh1roScs4RaSMvn2ftodGFZZU68sG6SlKUWNyT0g7CrdUWsYxkZCbUt3wY/A4bErfLK/Ew7g8wm6Feixae1c2X05rlM7sPq1LjiUDf5RhFoQUrcK1xealdW1Sju5OZqboWSzGOERxrGsCWkuH/IX+MUmVlyjhLIEYwzy8BWBw6UAQkJncCwrTS5cOQqePBzN8tW5C2VBKgNlXSofp61usoViThwZunyJsW0cQ2WHPKvaQSUhQ233FY1ly9OQyuzY8oxoyPEYZUEFSQbGJn40m1NM6ld8ZI2mVYTxcMEOJuNjFx0vvWuhbq9rMtlm2zcjO5rjnGlBpQICTM22HTkax21P8fB06lCa3RH2DeAQHASFKAI5kjuBQqPp8rszSWXhhmDzcOKKLpPe0/rTatZvltfDF2abYt3YxaWZvW2DeeTNLGOC+aamLZaKmSjpXTcg4OlVWTAPicalAJ3I5c6TZdGAyFUpGLzrNHHNUAwPKRBgdq41ts7n+jrVVRrEmW4Vbiw2mSo3MiyQenT1rRVRl7UMsujXHczZIy9thIAISU3Ur1j/wCq0Xbao9nEt1EptgGNbcUkLZR4n9SFH73ho5FKJ8x3qtHCu33NciA7DfaTBC3Qn8SnUhAFrBCQZJmOUV08LHRcU2+AP/qFjdGHSkJBcXF4/CLnvvWC9xTSN2lUstmKwryVEHTEwDBvNZlOUejqxvlE0/D7RcWQhUW59Zvejq1MpT2i9TqHty0F5oHNZbhR8wlUbgdO3rWe+6bbhyFp41bVPg5w8lxL41hWm453B2m9ZtPiN2ZB62VcqfbjJsMXg2XEQ4ElIIPmAiRsb9K7kZQgs5wjzsmxDn+MS4Uttkr5W6mw3FYrdTG+SUPBSi0OWl+GgJhSrbAe1Mss9NYw2MjDcHoRIvMEVqqhxl+RcmInsxbw+pCSXCL+UTA/y6Gh9OulPI+vTy27pcIBwvEhcv8A0kdNcyKxrW0bsNY/kP8A2V3kbYHHJ3XiW1dkwP1mtEdXRt4khNk4P8UFofbWfKpKj60uN8LJex5AiyvMsUlltTjighIFyb/IbntTpt444Dgtzx2fM+JM1Q5iA60UhJCQFAQtUbbXG536VlssnLz0dOimMYYa7DcuzJtChdZWYlS1lZBG0AkRuaRPV2YwxU9E+XFmqynOS6AoKBBVpMgBQPIWMEU2F0prJg5i9shhjnlJE+b2ilaq6cDRVBSB8Jiy5cao56xArNXfKyWYvjznoZZVs4f+Bsh4ATIA612q7oxjnJicHkxue4t3DuqLehaVQoajedrVj1Fyrmsc5HU6Oy5e0D/75cJDa2glRIE7+u4iav7tvtZRVultq7Q24X4hS+XUFJBbIvbnaDptII5dRXSjCOMxF4chpm2VofTdCFGPKTeDyNBKCkg6rXXLIsw7CsOkoMKWd1jpPxgCsFydPCNm9XPPgrfwqiSq8TI2BHx2rHbRJPfngdGxdD/A4gLQFRcWI5g11dPbGyCa7OfbBxlgJJrQLwWJNUTBWoxRldlLj8AmPhvS52KKywoxy8GRzN0jUVNFVz5gTIrhTb5WMnWqS45J5MG1J1OlSk7hOkk+pitmmjBR3TyxV6m5YhwW4vHpS4PBV4aLDSElN+4i9bY6qpcLguOkscczWRh5HRCgFDexUJO/K1HKmmzmSMM6YobNOKSkBCUISBzH5CmOca1xwK2ROOAyCqVnvYD0FItvkukHFJrC4BszwyXmyLL3gkA9rHlWe5uVb8hVPbLkyquFZOhsA3mawenZJ7YM2q6K90jR8PZAnDiCdSuth7W963UUKL93Zl1Go9TroMxWLwzbgS4pCVKuAfe5nan/AO0n7hUY2yjldGT4nxxD6Qy4kJhMQbSeZIrlaqEXb7WPhp7Zw3BjGVY10ALXA6yTbtWiGhlNLcZHhMdYLBkMJDRSSJPm5mdzFbp1NVpV+BvtjLEug/CFQH9QiewtS6FJf+V8gz2t+zoi8Fr8oOhHMxBPpW1TjFEi4wWe2cbyttIhIueZJJPc0ixKa47KldKT9wPmGHYQjU422eggSewoHCCjmaRIVu2WEfKc4wL6nVrYxGlJUYQBZItt2rA5UL8oHUX0ttdmo4B8cvErgoSneTJMekRTNPCh2bq8r9GLU6SVH5Gq4py1OJZLJXp1QRzuO1adRJN4yKok4S3YPmrOROtqUC2olMiwm3UVz5Zb5Ol6yxwEMcNYk3CCYAibEcyb0TpnNLCItTCPDY3xDS2mUtoHnJB8u4jb3oLZt+1GGLjO9PwSweXYpwyAsiRdRMxPc70qOjunJ4XH7O5ZqdLCP7/SNgMGAnRAAjkOfpXQegljalhHCduXuJtpSfILAD0PsKKFLzsa4QLbXuMzxDlT8qcQdd7A3MdAKRZp7MtrlHV0epqwoy4EeW5AVqC34QkE72Ufjeqp0k5PMuEadXqoOLjBZf8AgfvZi3BZwqAVK3UBA9Z51144hHCORXpnD32cDlDpaQhEFQAgnpXP1OqlS1iLa+RWxWNtEcwwvipEqIgWjcjpTZxV8U2wa5utmaffWo6UCQBZM7d1dvrXKtrnJ4/wdSvallksLmS2lgmwJlQvB62NVXZOqXZc6o2RNmpy0jtXfzlZOO1zgkHKHcTaUqd9avc8EURO+fGlWtQEwNMAfU1ybv8Ace6TeDbD2cYEuOZUkkBRVIMTMnpHftWVV4lg1xmmsszruIxbayhsvx086QJ3rZCNseOTZG3SzWZJZPFzEjStaVEC2oiQOdyIm9Nq07m8z8CNRrKoR21eTSp4gUIh9K1BNkpaCUzH4iZJA2tFbHqKVwcf7e2XJq8tx6H0BQhSgBqA2SeYvQOcJvjkW65w74DPBE6tjEb2j02q9icty7B3PG0zOZ8U6VlDIBCfvKtG8H0vWG3VTUtsOvJ1tP8ATd0N9j76LMsz9a1BOhKuscut+lVTqJ5SwmDfoYQTecGhSpRBsB0B61trc5ZysfBy5JJnzfih5SHFeIgEqUOcxbn8OR51z9Q5Z2s9B9NphYs/AoRigY1ISY2rE8nVelrawj6zw9iw4whYJII57gixB9672hsfppt5PHayl12uLFeOz3DMKOl0rVN22kl0jnfRtvzNamsvIvc2sNF2X56xiwoNKWVJgqTGhY9lcqXZTGa7ZceHzgA4ix6tTYkgXt7Wk1zPqME1Hkk4pLg4njBppqDqLqU9LSTa/wDNqKm9V1pYyx1ellPEs8GLx+ZLxCtS1FyZjVEAdhyoJWtvJ0IQhBYQfgcqCmVFx1LV7FekWjnNCqJT6QyOvVbw+TV8JljTpaxDbq91FKgT8BsK0U6dwec8s5+r1PrSzjgcOu76dJItP6Um29qT24bM8YLz0VsJJA1RPOBv6UNM3P8AIKaS6O45RCP6YkmQPX6Vqtn/ALeIdsQ4vJmHGVYZJxOIHlTyBkiTHPc7UrSaRr3z/sFlLhFY48bAWGgXF6pDYQvawgmLc+1b4Occ54CkovGBzgM4U6IMIXpBUkg+Wep2NYbdbKMsJjVVxnAcUkgbGf5zo46yWF5BwVZjgw4gIckp7TI/WK1SnuXDJXJxeUJsRlWHw4K1agkDkSSZ5d6x/czjPElwa43WT4XYuwvFLDdkNQDyB83qZEVJalkenlPuRo8tzFvEplM9wbH5UEbFY9r7M9lUquQ9SikSOW1bI5iZ8JsyvDr4U86J1KBvYWJMx6is8vzOndFKCwd4gT57Cx/MVzNT7bM+Bun/ABNDhcYFNp7gV267E4o5062pMID4otyB2s864kyPWmyw00BFPJj8OtZH3jbYTAHwrg2QUUdZYfaB8TmJkk+Up2v/ACaqqUsuY2FKfHg3+XgLbQowSUgzHUV6Kv3QTfwcC32zaQDxLg1Lw620EjV03Inak6lS2YQenmlYmz5icgeH3UquYsLb1zJN46On6iT7NVwpkbqF6lEpj1EjvV01zlL4E33xccG4CBO2+9dBJKXCMGXgzOefZy4llLSFOqMLKUglKeYPf8quyiElhrk36ed0Y73JpIcZdlSMOiwn8zQRohTEzX6ud0uSg5y3OkyBz1X9RBrmz+o1p7OV/IvHyK+KTh8Y0EJcSlaTIJBFuYpl+sougnF4aNWh1T01mX0xLguF2rFx9Mf2oBv1uaxerp+5TOlP6z4hE2OGxWHZa8NM6QCNj0v710afqWlglCLOFdZO2e+XZ8bypanC4cMsoShRIBWUKIJMTG5t6bVsu1MaVHK7Kxk2/wD00zAvLfStSlOoCSNRkRJCh6yBfnNPc90faC1h8mwz3DoeaKVSFIIIISSQdgbbis922ytqXgig88GYbwjaVqDyB5hvYD1g9a5LnKmXvWUHGcorAdheE2h5kCRvE86310qa3RGfcyfDAsRwk4XFJU20thUrBJhxtcXj+5Jt0rdWmo7SvVUuzrPCjRcZxDLSkFCjsoiLED2m560M3t6WSSWG02aPGsuKUiEixuTy9IrjaymU7FtQ2mUVF7mTVaZhI6zvVPMMrpFLnBSzATpTKQZuOvO9BU8x2xyv2FLvLMjxjxQtpfgIJ8sa1DcmLD02rXVKSTi2OqpjjewbhriJpCtLrYUT/uAQfQxv60X/AI1nsK2je/bwbBpKMSnU2ogdhCga50q/uJOUZC/dQ8SRZ4BSQAhatViu1u5mpDSYeEnl+St6km21/BS9meFQ5BMrA0z25itsXp4P8uUHHS6icMpcMk8lrEslCQFi5BSRqSeo5zWun0pQwnkROFlU8y4MJjuFHUOJ0jyg7qiY5zFJsqksmmu5GyyXLyzF/wB5qV17Hl9ma63dwM8SJH8NFNtPKFQFuBwCWFK2JUZJH8v60c1sXJplY7EKeIMQCQJ2n5/z51xtTZmeEbtNDC5CsixIKCgm6T8jcfrXU079iyZL17socDT1p/AjDAMTiClKlGwSCaZyRJZEWV4gKSSCBAk+lc2aXOfBtT6/ZZi8I24jVtNwqxuJHOssZf8AUfGc4SwM8HxI7obZaaDroASVE6UyBMgbxBFzHaa9Hp+a0zi6qO21+AlGePBxOHxKGtTkD+kokpm15n9Kc4prkzp45RN/B4ppRUypKkxEEW+B51ncXF9ZN8LaZxxYWIxOP28Nr1hX1q1/BHHS/LBsybxOn+s9pBsENABSj0HOl2T9OOWietRD8I5/kVYXFhiQ0iD+IgF1c91GBXLnqrZP2oVO6y54Ya1xQtuQolw/5EAD/wBUwPiaKGptg/dybKvpcp9sKynN28WVhbKQUgRuSR6mqdtVmd8V+iavQPTqLTzkg9gcNqAV5FK+7uJPT1rKqqZ/lwI9KTTaWUXO5HoAg796G/6ZFLKYqGJMp/0mTo8VExcRf86VD6dDeo7uRjSxu2szWK4Dbbf1B1xvVP3bJv35V1/uPSaqsWQVXujuiaThDhpnCJWttwuLVZS5HK8W2rU7N0HgS++QrH8Rs4fyrJUsidAuL7SqsVdmyL3cv4NUdLK3mPXyRbew+OT5ZC4m4uOW45UalVf7WuRV1E6u+jmVMvMOBJkonrNu4pdNFlVvHRn25WTRPLJBCTHc8q629RLisPLFhCm0gNqAAtB3J6muTqdRZndCSx8GpKMn7kRWw+ogqcAHPSCD+tZrK9RY1KUsL9BKdMU0lz+yTuXFRKvEMcpAgVctG7Od3BSvUVjBFeJQixcSI2M/Sr3xq9ra4FOaZk+Jsoaf/qJIKvhMetLV8O0zRVaumzNM5A6hQWoeSbbwBtWuE3ZDKRqU45wmfQuHGUoTY+tZ6dqk5GbUOTeGEYgLKwEKWAUkBUHSJ5x19aFWTdijFvHySGxRzL+xnc64fdbT4mpuBuo+VSj3J59hTbtLOMfGDpaf6nSuJZ/+IVZVmLTLoKiNY2TrCfjN6TTXOD37WZ9b9RjZHZBf1NPiOJXFRCGzOw8yj6zYGtU9ZbL8YnFQxyjEFdlp0mdtJHwknvWnTOc096GSeVkMU2oEyQRy5EVca5xk9zyibk1whJj8SQrWJNyInYQbmPa1c/VXSbydGiC24YjxqSVSR76YrDFOb5NiajHADkrylPORzn5RFdeKxFIyzwaZIXA3+FHyJyjnE7hGHctFo+YrZIzw7MXlmI0tatyryifW9czXV+9JdM36ae5P9GgdwTLiAJIKhvcx9Kz5rjjHYyM7E2xQnLvCWEq1OJmJbUUkes861U6r05cB3VQ1NfLw0b3JMjw2H86ASpV9SzqUJ5X29q6frJ8tnAcGngbqxiRsNzAHX0pctRFLKCVbfYSL3uK0RW55FPjgyWbPFbyzN0eRPRN7m3WuZrJbrMPoi4NAvAJSwWkDdJE+o3+dbpQjGrbBeBlUts1JmIxHC6wrSXEjneZ6QLwN+lcayE08SPR1/UYYykH4DCKwqZQhayRc6TIE2AG1LTlFcZ/sIuuWoliTSBmcU8V61oKlT5QYtexPT0NSUmo5aLddeNsXhGla8ZaNa2gFx5Qo2+XOuhRXbYt9i58HKucYPFbM4M7wrWIK1srDg3USd+cAnaq20RnlrlAy1VzhszwKM6xSMbiCXnScME+RoaheLlYG56XNOeog2KjPCwF8E5OWsQpeH8VLOytYhKh/aE7bmx3F+taouMo8clSkEcfZXBGIudgoAWAGxrBqalF7kbtJfxsYryDGqC0KT5b8rSOY6kVl3OM9+TbYouOGfQEKtuoT3/Ka6avhLj5OZhA2Gy4Id8QrWqbXNvQj9aTLR7mpKXC8DJXZhtSQW/j2khRIjRaSkx6A8zSJW04fHXloQ4ySy32LXs4edMMtwnqbmgnqLLOKo8CscnmsuW4PO7f+0Gw9RQVaOU1hyx+gnl9kn8pQgeZZANrc/gJpsvpkIrLkVlA6/BFi4odJmP8A6EUp6KpcOTRacWwo4XWgInV02587WrqUqNVainkdHEXkZDDISAAAAOgrNdVGbyB6j8iDGcQ6ZDMQPxrk/wDqOdYPW2e2r+7AlNsTYjFqWC46XHSPujTCdrQBtRRds5Znlg4Pma2Qtx37QpTTlyCRbVOyhFgRsa7cXxwMXXBsv+lWcHWvDu+ZOkLQo3KSCElM9DII6QapxinkGUX4Pprz6EjUdqjaSKjGTeEZ93NWdWtJUZJSbmJtuD0muTc665b03k6denslHbJJAWOxijsqxtyv8a5VlspM111pLkBxGPITpWR5gRyBFt/anVqSw0W4R5Qu4RnVPY/nXWyY59G4Q5YWo8iMFXFTYOGdHafgZrbNcCK+z5hg3/KpG5SdaR1j7wHeKGdSth+0NhY65fpmlyTMFKAUDKR929pjczvv7VwnCVcsLs6b2zjkapKjCkr1EH1B/m1X6O3Esgbk1twaLKsVr3IBjbcjp7Vr09jcuWc+6raFrwa1GQspi21OVM3LOcClZFLDQxSQLTeuhHjyZ2ZrifAKQv7S2QIH9RJ2Unr61j1laxvRIrPDC+Hs1S7KETAHw7XrPornPMV0W1gvzp3w0tuT91xOo2koJhU9tj7VtUOnI0ULe3H9DJChG086cqOMdmd5TAX8Rh2laVBtKlciUpmaXKFKe1pDUrJLKyTfWfKLRIMjYDe3WmSlGCWCRS5yRx2XM4mQtAPci/say5hc2sANOKPnvFOT4bDLgP6XDcNhKlmO8be9Jlo/hkSz0C5NnLjJKkuWGyb+br5TFVCmVXuRJRGiOMA5IeaSpKrEAkH5yKzyte55Wf6hRnKPQzweFZd8+F06hB8NQiOvPb0oJR381cv4NVd6fFhq8MCEgLjVF/2rXVJwilPszTw37egdh0KLiY2FzyvMD1o9Ffvcl8f2GWQ2pMNUsGyoiLz+tHOyO7EsYEYfaKnXUtpKgg6U8kj8gKF2KC3JcL4ChW5tRzyJMwzkBOpaw2CPKkAFR6Xj6UiU04bpPb8I6FGkzPbFbvn4M4vOFPENhxSFbAyQFesbGsDttm1h4NOr+mbI+oih/CYkWJWegMqFXZ63UuTkShHwSyzPHWjoVI6jl+1C7JJYTYPMWbdjEtYhlUEiR5hMEftXTocLK3j+oDbbMRmeN8BWhuCRusgKIBmAAbe9ZowVOYo30aeElukOuD89StJadXqXq8pPMHl/OtOo1PO2ZWq02PdBcDLMsDhHFAOoTqNgVJ/WmvVQjPa20Zo1TayjrOU4XDzoaQmd4Fz0rRKyK/ICMZPoS50tzFyhIW22N1zpUozED/HqaxanVcLadTTUxoeZcsjh8KyyylpI1ECNR3J3J9zXOtvUlhLljVvcst8ASiUiV79DyEG9BGrby+xrlnoyOJxHjvzJ0pkI79T710q4bI4ESfk1vD2ECUk0wRNj5KbcqIXklmwlCgZuCK3PlCF2fJszSW16hYg0MJYYc0mgjIMSUoUibLUVJ/xP4ke+496y62nOJx/qP0tn/BjPK8wUhcG94isWcG+SUujXYVNwtJg7npHOYrNJrdugKl1tkP8AB5kLBZibdvjyrbp9aspTfZgt0zw3EaYl5LbZWdkgqtewE/pXXbW3gwrOcGCyvO1Zg24V4hTIBPkSUAJTy1qIknrsKmEljsJrkL4EzRwOOMFQdZElDukJJgjoBIM79qtbYLCWAZLk12ZpSpBCrpi4pF9ijHLYyrKksCV/MXGcOVtp2sArdI6gVlhq5uvcjV6KlZiRhcZiFOqLi3FTN5Fz9BtWSdiby8tnQrW1YRrOFczS4EtDzC8b2jvUp3SmoT5Mmpgl7lwaxbqWxc2NdF2Qo7MChKb4Pn2Y5TjBjlYhDLeKbUZ0TBAgJ3VsQAKOFkbVxyE1t7GbHDBW6294CMNB1FIUVqMX5QlNFhRK3ZWGM86YwP8AvITq6pTf1Omseoupg/cuRtOktsztQXkmXYdsFbF9QA3J/PaiqVeN8ORVkJwe2SL80xqWG1OqBOkbfpVWba1vfYdUHZLajD/94rcVIVoHsB79aT6r8PBvWniuBhl/FK1rSklJSTBMXM2gfWkuyTfymVLTQUW12aguuIcSmxb5km49KcrLKZqH/Ex7YSi35As/4ZaxPMoVyI+m1aL6I2SH6P6hZp/2hPlfBBbXqcdBAPl0iJ9Z2pFeh92WzZqPrCnDbCPYLm+NxT+KcweE8FHhJSVuOklRn+xI5Cup6MWcNyzyZTOstzHDuo8ctPIVq86RpI0gqM7RYGKy2/T4TTceGWp+Bitb+HACgdO8/X6VypVzr4fBf7RAsh+dBla7aSYnsk9O1qKM8vD7NdWo6Uh3w9kZbHnRcGd9iP1o66pSbckOuv8AEWaV91K7GJFyen71otlXPhpZM9cJx5FruJjUdZibzH05b1jts3PhmyFf6F6sSpQ5gXMk7DoKxOMpPvg07Ypg68Wlva6gPv8ALtFNTVfEeX8k2OXfRkM5zMrJbST/AJGtdFLT3yKskukW5XgwkaiLRz3NbMNdmZvPCNflbgCBIoEwJRGAxSe9XuA2MPzBskH3reZUz5jxAxDhSRvt9KB8cjUZvWWzbai/JYL/ABaYRleehtbhdnYBNpvzJ+VYr9JuilE2V6jEsj5GbrWkQqUb2NvlWB0bFhmtSi+RzluLCrTB9aV6SbI+EN8M5iUElKgU8wVAJV7HY/CtdNsq1yxE4VTXK/scy/h5h5S3FtBC1cgAZPO9baNVKaa/sc/UUxraw8o0OEyrwkjQAkc+p9faquja0pCYuPRZoUtKvw8pid+grIt1sZPodxCS8k2sobUgBY1AdQP1ptGjhsWfAM9RJSbQJm3CzDyYAj0sP+KdbRW/xKr1M4st4fyZDA8ghI5/vS9JDLbxx8kvschhiWEuWMR6mtNmlhb+bAhNw5R5CdIhK9PoB+s06qumlYjwRvc8tC/O3MS22VoWlYTyVAn3ECe1Fa1jOTRp/QlLElgxKcS9iPODq5GxkEbgiLV53VUzUvdyduWp02mSTRoOHVhnzK1kmx0xpPrJotJOFT3PJx9bro3cRXAwxGcsLlLiXClW8gEC3+JNaI6qmUnuy8/4MCscehBm3BjTn9XDKEG4vKT8Nq0yqjJZrfBor1Tz7ijB8JuhSFFwAgzt9aWtNLjk0feRxjB9ASAUeYiALnYVrnVGcMMwJvdwgYLKlSh1JSkwR0tXPlC31N0Z8LwPwlH3R7CmXEnZQJ9a112VvmL5/kRKMl2hTm/DDL6w6dSHQIDjaihY7SNx2rYmxaAGeD2woLcdefIuPFWVD4dKjm8FjDGMBR810x90QQfWubbXJ2bm+Pg0xw4YSFDOFaw6yptu5PrB6Css7qq5e1ZGw0rkuXgJx2YDT0J360Oo1ilHEf6j6dK4vkBU6BZFhuQLfOsnqy/FdGnbnlipxYBkHnPalsfEBx+aJAgq2p0a5zJ7Y8iB/FOPHSmQnt8Lmt9VEY+MsRO1saYTI0sp1uBU/hBO/c+1dKFe33SMU7dz2xL20FxU/hH51msmNhHA5bZIEUtZI2skglVTkrg07q5mY3robuDDtMHxhgioSNxcH50O7kYlwYjxguxELG4/WpjAWfDA8SxJ2o08gtYKmHHGjLaoHMHY+1BOuMu0MrscehzhM8SbOAoPX8Px5e9YbNI1+PP/ALNsNQn2apnNP6KYOrcjmP5tXOtpcnh+B8Gs5HeUZkopStxUHdIEAR1POh4g13lC7IJ8IaDP9X3VEweZ3p/3VksCPtEuxhgsxWo+ZCQjqCfyitdd3/ZcGe3Txiva+SHEOMW1hnFYYanDt+IidyE8z0FbKpUwWE+zK4Tkz5krAYl0B9ePW2sTAcdUFiOREiD2itXsl1gDDXaN3wDmbzrRDy1uhMQtQAkyqQmANSYCTJE3I5VHFLoFmsCdW8e1Vt3At4EOd5n4KvDQkrWRIGwHqawam6NUtuMsNSeDE5sjFvmVqKo2SDCU+361m3SufISYNr8CVuk6SkFYSd1Cw39q2qlWVpS8HQnm3T4faLGMS4UB5GFdU1ckhYVYb7Uv/T685wc3HjJoeG8I1jEF1GppSTsL/HkR2o/9PqkuOP4FyyuGGYIqw74BsFEBQ/CoE7jvWSpyou2votJtGsdYT1rruEWyk2YrirOwy4tKAo/cIWdkEDZAIjV35VztTLbNqJ6H6fpFbBOTx3x8/wAgvBONBfKvPCgQsqVqkm4JtWWmajb7vPZp+p1L0ccZXWDXOtsTdUGeRN/hVz0+lcst4f6OKndjolicXsAq21apX1xxiQqNMn2hW9ngTMmTPxHttWSev46NkNF5FL+IWXCtJuofLpWCU7bHnJsjCEY7cEPtBi5vP8ildvkNx+Cp3EJJk7UXtKw0A4nNEJBGoD8/QDc0capS6RG9vYhxeaqVZIPqfpWyvSJcyBlb/wBSpvDFRlf7/sK2wrb4RmnNLsZYd1LN0wVR/P53rXFRgZ5OU/4LGUuYhUkkjmf5zpNtuew4wUejRYPDAQALCs65ZbYYUelFgHJII7VMEyN1qH8mte5GbDFWZsJWDMbf80DaDjk+ZcRZNpVrTa80UZ+AnETt4j8Kt+tH+0Udcb6USYLRX4MyKjRE2ew+McZToglAJI996TZSpvJortcVhjJPERnSUq08yN/h0rJLRp855Hx1C+A/B563PkUJ72PwNInppx8D1bGQ6wGeq1g6t7b2+lJ2Si8lzjGS4GGMzZaVgz/zSZqTeSQhHbgsTnSyIUkKHdM/nVbpx8kdEGwvL+ItFtAI6Cw+VOr1d0GKs0cJDzB5usidKQFXlRArRVrr12l/UyWaSsozB9lfmcWkEbFMz6AzV26iuxZnjIC0knxFFH+pMRGre216qOvhFYwH/p8kLn8Bh3hBncyNwr1/apHX7VlD/SlFbQDC5BhGUKShAOomSpStQm1oO1Z7PqVreY8FR0kfJp+HMQ2y34aFAAWAO/f1NbKPqEpL3MRdpEnwiGa5lqjS4AOukagfSs2o1spNYY6jSRXMkAO5jMAuOqjmCEz6xSn9Qm1g0R08V0kV4nMErsRrFrG49b7mkyusm8hQq2dcF2HxavupSlCegAFGo2zeG8ICaiuewPHYgJVIVfnH51VlKi+GMrbaw0SYfK07kEXHc8/0oI1rJJPaxa5jhJPM0Ty/AzaUvZlG6gB3IH51arm+iNwXYE/nTQvrUtXRAt8TanR0cn3wLlcl0he7mTq7JGkHpc/HYVohpoR/YuVjZU3hBIKzMwbGVR3Naoxb6Eua8ktahZIAHz9z9KYq0uWA5t9HQ6oc6Zu4AaC8Fg1LIKpCee9/SkTsSDjE0+GUlICUpgfzrSG8ltDNt0DkflRoW0T8YdKIHBIPDoflUJhjZVaOBIM6if4KBhpinMcCFAz+lA0GmYXOcg3I/SrjZjgJxyZp5hbZ6itEZpimsHEYoURQSl4GrISDXShcQlIgtpJEKQD32NLaa6GKSfZS7hwn/wDNxQPQ7VXf5IJSx0wxObOrQAY1pgGbBQ6+tZ5aeG7PgfC9pBTGeOpEKRPzpUtLF9MNW/oKwPELaSQsEHlaKXLSS8BeqmHv8ThQACk25zely082sNF17E+yo5oFESuSe+1LdEvgd6kfBd9tTyNLdLKUxnkeM1yBuDt1BFX6e1gWsGex3mI6UGxhrGCOEzEJUdRsLgdTRelJYaRUmmuCKMzCj0qSqZfCOO5iAbkDl0NFGqXwDuj8gjmbJTutI9xTFRN9Jk3w+Sk8RoFtc+l6L7SxlOyAK9n6dwFfD60yOjfllO9LoqY4gfE6BAPIyqab9tBdsVKxy8FRU8uZUQOceUfWmKEI9IFzb7ZY1l3afn8zTVCUhcpxXYYxhEj7wHxo/Rfli/WXglisQgbD9Pyq41pAubYJ9r6UTKR1jW4YSCe/1NLlJINJseYLJwLrOo9OQ+tZ5W54DSwN28L0NLwXuD2cNp5n4UajgByyW6e9EkDk7p7j5VeCslgRUwVkclVaBOCtZ/l6phAjyu1AwkLcSwDuBQOIxMzuZZYk8qDLTDxkzWPyEfhEU6N3yA689CR/BuIPOtEZpinFoi1jCk+YGiByFJxYPOqCaJgg1GkXycJA2JqsF5Il9QofTTL3tHPtJ5iqdSCVrOBxHS9V6bL9RFjeFS5sQPaq5iWmn0DuYK8agPSavP6J/UOwJWxKm3VAkREz732pU47+0Eml5IJbJnzE9ZUqr248E3gzmF5yfS9HHPwC5JFP2NZ5qt60xL9C8+SxvJ3F3M+/70WGTcg/B8MqO8CgkpMKM4jNPDyU7qoVVJ+S3bFdFxydrmaNUJdsB3vwWqbaTcD9qv0oIF2zZScUkbfKrW1FPc+ypzHnkatyKUQRzEk0Dn8hbSTGFdd+6n3Nh86VK1IYoMcYTh0C7h1dgYFIlc30GopDdpsIEJCQB0pLbD4LAonp8KFtl4LmfKR1kbDvVx4ZT5QyKu1PEHNdQvBJJokCy9K7VMsgYHCT/wAUam2C44JKQTeja8ldcA7rJ/hoWEmCusmgYSaAX8JQtBJi3E4SltDExe7gwdwKpSZeExZisiSrlTY3NAutMUYnh5Q+7TVemB6bXQvcwLqPwk0xTTA2tFCnlDcGjTKOjF9avJXB4PiryVg74oqZJgtwypmDQSYUV8FgUI3vVdlnvF71ZTZ1DtRlxOKxN6KL4AkiSMaRzq9xHEuRmKhzqtzL2ovRmZHOhcmEkkRczQ9atZKaRFnMr3M2oZNhJIu+1qVZKZ+dLyEFMZbiHNkkDvahc0iYGWF4WUfvrA7C9A7X4IkkNsNw82jue4mlNzfkLcl4DhgiNj8jQbZF70dOHV1HzqbWTcjwwyz0+NTbIvdEubwahyn3FTbJFbosiGFz90/EVSUsltxGRArS2IK5FDkmAhsJ6imLADyEBsdviPrVFhWDYEE960RrWBc7OQrSNoo8cC8siUjoKrCJllLqB0FC0gotsAeaHQUuUUNTYC6yk8qW0g9zAnsKKW0GpMHLAoS8nPs6TUwWpMqVgUHlVYJuYO7kjSuXyolJopsAe4WZJmKJWyRWEwJ/hFvkYovXZWxATnCfRdGryemDK4cUNnB86L1kytrB3MjWPxp+f0q/VRW0oVlKx+JPz+lErUVgj/pi/wC4fP6VfqIo8Moc/uT8/pU9VE2svayBZ/Gn51XrItQbDGeFln/cT86B3r4C2B7PB55u/AVXrMvaGtcHNc1KNA75eCbUMMLw0wjZE9yZpbskwkkNGcIhNglI9AKHOSBCU1CmSmpgolpNXgmSJt/P2qiyxoSd6tFMLSgxyo8MDJ4p9KovJxIq0iMn4dXtBzgklrvVbSbghtNuXwpiXALYQlv0+Aq8MrJ//9k=)

Welcome to my blog! I’m Isha, a 26 year old passionate physiotherapist turned healthcare researcher. I graduated with my physiotherapy degree in 2022 and soon pursued my Master's in the UK. However, life took an unexpected turn, and I returned to India to continue my practice.

While I deeply value my background in physiotherapy, I found the demands of the profession to be both physically and mentally taxing. This experience ignited my desire to explore a different path within healthcare—one that combines my love for the field with a focus on research.

Now, I'm on the lookout for non-clinical roles in the healthcare industry, particularly in pharmacovigilance and clinical research. Through this blog, I aim to share my journey, insights, and the lessons I've learned along the way. Whether you’re a fellow healthcare professional or someone exploring career transitions, I hope you find inspiration and valuable information here.

Thank you for joining me on this exciting journey!

[Please send enquiries here](mailto:contact@dr-isha-kamble.com)
`;






export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
