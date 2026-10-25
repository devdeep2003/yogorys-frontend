/**
 * MeditatingAsciiArt
 * Authentic terminal-style ASCII artwork of a person meditating in a seated lotus pose.
 * Uses character density for shading, an aspect-corrected circular halo, sparse stars,
 * and horizontal water reflections.
 */

const MEDITATION_ASCII_ART = `                        .....::::::.....                        
      *         .  ..::::..............::::..  +         *      
                .:::..                    ..:::.                
             ..::.                            .::..             
           .::..                                ..::.           
  ++      .:..                 @#                 ..:.      ..  
        .::.                  #@#%                  .::.        
       .::.                  /#@@#\\                  .::.       
      .::.                   %###%*                   .::.      
     .::.                    %%#%%|                    .::.     
     .:.                     |*%%*=                     .:.     
   ..::.                      ***|                      .::.*   
    .:.                       ###%                       .:.    
    .:.                   @###@@@###@#                   .:.    
    .:.                  @@#@@@@@######                  .:.    
    .::.                #@#%#######%%###                .::.    
    *.:.               #@#*|*%%#%%**=*##%               .:.+    
     .::.             @@#*  *%###%%|  %#@#             .::.     
      .:.            @@#*   ######%%   %###            .:.      
       .:.          @@###^#@@@@@@@@###^@@@@#          .:.       
        .::.     ^@@@@@@@@@@@@@@@@@@@@@@@@@@@#^     .::.        
  .      .::.  #@@@@@@@@@@@@@@@@@@@@@@@##@@@@@@#%  .::.      *  
           .::.#######@@@@@@@@@@@@@@@@@#%#######%.::.           
             .:%%%%###@@@@@@@@@@@@@@####%####%#%*:.             
               ||***%%%%%%%%%%%%%%%%%%%*%%%***||+               
                     ______________________                     
                                                                
                ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~                 
          - - - - - - - - - - - - - - - - - - - - - -           
      ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~      
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   
          . . . . . . . . . . . . . . . . . . . . . . .         `

export function MeditatingAsciiArt() {
  return (
    <div
      role="img"
      aria-label="Monospace ASCII art of a person meditating in lotus pose with a halo, stars, and water reflections"
      className="relative flex flex-col items-center justify-center py-1 px-1 sm:p-3 md:p-4 select-none w-full max-w-full overflow-hidden"
    >
      <div className="w-full flex items-center justify-center overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <pre
          aria-hidden="true"
          className="font-mono text-[5.8px] min-[360px]:text-[6.6px] min-[390px]:text-[7.2px] min-[430px]:text-[8px] sm:text-[8.5px] md:text-[9.5px] lg:text-[11.5px] xl:text-[13px] leading-[1.12] text-indigo-200/85 tracking-normal whitespace-pre select-none transition-all duration-200 mx-auto text-center"
        >
          {MEDITATION_ASCII_ART}
        </pre>
      </div>
    </div>
  )
}
