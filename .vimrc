"---------------------------Vundle----------------------------------
" Vundle tutorial on github: https://github.com/VundleVim/Vundle.vim
set nocompatible    " be iMproved, required
filetype off        " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim/
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

"-----------------------Vundle plugins------------------------------
"--utility
"----cursor line
Plugin 'miyakogi/conoline.vim'
"----tabbar
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

"--git diff
Plugin 'airblade/vim-gitgutter'  
 
"--Web
Plugin 'othree/html5.vim'
Plugin 'hail2u/vim-css3-syntax'
Plugin 'othree/vim-javascript-syntax'
"----Jade
Plugin 'digitaltoad/vim-jade'
"----Stylus
Plugin 'wavded/vim-stylus'
"----LiveScript
Plugin 'gkz/vim-ls'
"----JSX
Plugin 'mxw/vim-jsx'
 
"----Perl
Plugin 'vim-perl/vim-perl'
 
"----Python
Plugin 'klen/python-mode'

" Document
Plugin 'plasticboy/vim-markdown'
Plugin 'godlygeek/tabular'

" All of your Plugins must be added before the following line
"-------------------------------------------------------------------
call vundle#end()   " required
filetype plugin on  " required

"------------------------plugins setting----------------------------
"--conoline
let g:conoline_auto_enable=1
"--airline
set laststatus=2                                    " set status line
let g:airline_powerline_fonts=1                     " enable powerline fonts
let g:airline#extensions#tabline#enabled=1          " enable tabline
let g:airline#extensions#tabline#left_sep=' '       " set left separator
let g:airline#extensions#tabline#left_alt_sep='|'   " set left separator which are not editing
let g:airline#extensions#tabline#buffer_nr_show=1   " show buffer number
let g:airline_theme='tomorrow'

"------------------------general setting----------------------------
"--search highlight
if filereadable($VIMRUNTIME . "/vimrc_example.vim")
 so $VIMRUNTIME/vimrc_example.vim
endif

syntax on
set expandtab
set smarttab
set nocompatible
set nowrap
set wildmenu
set backupdir=~/tmp,.,/var/tmp/vi,/tmp
set directory=~/tmp,/var/tmp/vi,/tmp,.
set nobackup		                        " keep a backup file
set tabstop=2
set shiftwidth=2
set bs=2		                            " allow backspacing over everything in insert mode
set ai			                            " always set autoindenting on
set viminfo='20,\"50	                    " read/write a .viminfo file, don't store more
set showmatch
set noundofile
set cursorline

"--Diff
nnoremap <silent> <C-G>	:diffget<CR>
nnoremap <silent> <C-P>	:diffput<CR>

"--Window
nnoremap <silent> <Tab>	:wincmd w<CR>
nnoremap <silent> <C-H>	:wincmd h<CR>
nnoremap <silent> <C-J>	:wincmd j<CR>
nnoremap <silent> <C-K>	:wincmd k<CR>
nnoremap <silent> <C-L>	:wincmd l<CR>
nnoremap <silent> +	:wincmd +<CR>
nnoremap <silent> -	:wincmd -<CR>
nnoremap <silent> <	:wincmd <<CR>
nnoremap <silent> >	:wincmd ><CR>

" VIM 6.0, We're using VIM on ntucs? Solaris, my own build
if version >= 600
    set nohlsearch
    set foldmethod=marker
    set foldlevel=1
    set encoding=utf-8
    set fileencodings=utf-8,ucs-bom,latin1
    set termencoding=utf-8
else
    set fileencoding=taiwan
endif
au BufNewFile,BufRead *.less set filetype=less

"-------------------------color setting-----------------------------
set t_Co=256
colorscheme desert
hi Comment ctermfg=Red

" vi:sw=4:ts=4
